import { IAnswer } from "../../models/IAnswer.model";
import { IQuestion } from "../../models/IQuestion.model";

export interface IQuestionAndAnswer{
    question: IQuestion
    answer: IAnswer
}