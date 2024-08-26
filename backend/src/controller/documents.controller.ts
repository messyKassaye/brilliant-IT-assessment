import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError.error";
import axios from "axios";
import FormData from "form-data";
import { NLP_Server_urls } from "../utils/NLP_urls";
import { INLPResponse } from "../responses/INLPResponse.responses.response";
import { IQuestionAndAnswerResponse } from "../responses/IQuestionAndAnswerRespons.response";
import { IQuestionType } from "../models/IQuestionType.enum";
import { IQuestion } from "../models/IQuestion.model";
import { INLPResult } from "../models/INLPResult.model";
import { getQuestionTypeFromFileName } from "../utils/utils";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      throw new CustomError("File is not uploaded", 400);
    }

    // instead of uploading on both backend side and NLP serer side. I prefer to use
    // memory storage on backend side and disk storage on NLP server side
    const formData = new FormData();
    const fileBuffer: Buffer = req.file.buffer;

    formData.append("file", fileBuffer, {
      filename: req.file.originalname,
    });
    const NLPServerUploadResponse: INLPResponse = await axios
      .post(NLP_Server_urls.uploadFile, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...formData.getHeaders(),
        },
      })
      .then((response) => response.data)
      .catch((er) => console.log(er.message));

    //well structured  response for the clients
    const questionType: IQuestionType = getQuestionTypeFromFileName(
      NLPServerUploadResponse.fileName
    );
    const question: IQuestion = {
      questionType: questionType,
      fileName: NLPServerUploadResponse.fileName,
      filePath: NLPServerUploadResponse.filePath,
    };
    const answer: INLPResult = NLPServerUploadResponse.result;
    const questionAndAnswerResponse: IQuestionAndAnswerResponse<
      IQuestion,
      INLPResult
    > = {
      questionType: IQuestionType.DOC,
      question: question,
      answer: answer,
    };
    res.status(200).json(questionAndAnswerResponse);
  } catch (err) {
    next(err);
  }
};
