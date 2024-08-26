import { IQuestionType } from "../models/IQuestionType.enum";

export interface IQuestionAndAnswerResponse<TQuestion, TAnswer> {
  questionType: IQuestionType;
  question: TQuestion;
  answer: TAnswer;
}
