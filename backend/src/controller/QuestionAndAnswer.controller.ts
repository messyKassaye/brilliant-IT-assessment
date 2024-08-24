import { NextFunction, Request, response, Response } from "express";
import { CustomError } from "../errors/CustomError.error";
import axios from "axios";
import FormData from "form-data";
import { AI_urls } from "../utils/AI_urls";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      throw new CustomError("File is not uploaded", 400);
    }

    // instead uploading on both backend side and AI serer side. I prefer to use
    // memory storage on backend side and disk storage on AI server side
    const formData = new FormData();
    const fileBuffer: Buffer = req.file.buffer;

    formData.append("file", fileBuffer, {
      filename: req.file.originalname,
    });
    const AIUploadResponse = await axios
      .post(AI_urls.uploadFile, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...formData.getHeaders(),
        },
      })
      .then((response) => response.data)
      .catch((er) => console.log(er.message));
    res.status(200).json(AIUploadResponse);
  } catch (err) {
    next(err);
  }
};

export const storeQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { question } = req.body;
    res.status(200).send({
      status: true,
      message: "Question stored successfully",
      data: {
        question: question,
        answer: "Question is received successfully",
      },
    });
  } catch (err) {
    next(err);
  }
};
