import { IQuestionType } from "./IQuestionType.enum";

export interface IQuestion {
  questionType: IQuestionType;
  question?: string;
  fileName?: string;
  filePath?: string;
}
