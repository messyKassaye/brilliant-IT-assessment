import { NextFunction, Request, Response } from "express";
import axios from "axios";
import { CHAT_GPT_MODEL, OPEN_AI_KEY, OPEN_AI_URL } from "../config/config";
import { IQuestionAndAnswerResponse } from "../responses/IQuestionAndAnswerRespons.response";
import { IQuestion } from "../models/IQuestion.model";
import { IQuestionType } from "../models/IQuestionType.enum";
import { IAnswer } from "../models/IAnswer.model";

export const storeQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { question } = req.body;

    const formData = {
      model: CHAT_GPT_MODEL,
      messages: [{ role: "user", content: question }],
    };

    const makeRequestWithRetry = async (
      retries = 3,
      delay = 1000
    ): Promise<any> => {
      try {
        const response = await axios.post(OPEN_AI_URL, formData, {
          headers: {
            Authorization: `Bearer ${OPEN_AI_KEY}`,
            "Content-Type": "application/json",
          },
        });
        return response.data.choices[0].message.content;
      } catch (err: any) {
        if (err.response && err.response.status === 429 && retries > 0) {
          const retryAfter = err.response.headers["retry-after"];
          const waitTime = retryAfter ? retryAfter * 1000 : delay; // Use Retry-After header if available
          console.log(
            `Rate limit hit. Retrying in ${waitTime / 1000} seconds...`
          );
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          return makeRequestWithRetry(retries - 1, delay * 2); // Exponential backoff
        }
        throw err; // Throw the error if retries are exhausted or another error occurs
      }
    };

    const chatGptResponse = await makeRequestWithRetry();

    const questionResponse: IQuestion = {
      questionType: IQuestionType.Text,
      question: question,
    };

    const answerResponse: IAnswer = {
      answer: chatGptResponse,
    };

    const questionAndAnswerResponse: IQuestionAndAnswerResponse<
      IQuestion,
      IAnswer
    > = {
      question: questionResponse,
      answer: answerResponse,
      questionType: IQuestionType.Text,
    };

    res.status(200).send(questionAndAnswerResponse);
  } catch (err) {
    console.error("Error:", err);
    next(err); // Pass the error to the next middleware
  }
};
