import express from "express";
import upload from "../middleware/multer.middleware";
import { storeQuestion } from "../controller/QuestionAndAnswer.controller";
import { ValidateQuestionForm } from "../middleware/Validation.middleware";
import { uploadFile } from "../controller/documents.controller";

const appRouter = express.Router();

/**
 * @swagger
 * /uploadFile:
 *   post:
 *     summary: Upload a file
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         description: The file to upload.
 *     responses:
 *       200:
 *         description: File uploaded successfully
 */
appRouter.post("/uploadFile", upload.single("file"), uploadFile);

/**
 * @swagger
 * /question:
 *   post:
 *     summary: Submit a question
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *             required:
 *               - question
 *     responses:
 *       200:
 *         description: Question stored successfully
 */
appRouter.post("/question", ValidateQuestionForm, storeQuestion);

export default appRouter;
