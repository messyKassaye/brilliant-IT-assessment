import express from "express";
import upload from "../middleware/multer.middleware";
import {
  storeQuestion,
  uploadFile,
} from "../controller/QuestionAndAnswer.controller";
import { ValidateQuestionForm } from "../middleware/Validation.middleware";

const appRouter = express.Router();

appRouter.post("/uploadFile", upload.single("file"), uploadFile);
appRouter.post("/question", ValidateQuestionForm, storeQuestion);

export default appRouter;
