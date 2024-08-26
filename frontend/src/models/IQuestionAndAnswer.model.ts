import { IAnswer } from "./IAnswer.model";
import { IQuestion } from "./IQuestion.model";
import { IQuestionType } from "./IQuestionType.enum";

export interface IQuestionAndAnswer {
  questionType: IQuestionType;
  question: IQuestion;
  answer: IAnswer;
}
