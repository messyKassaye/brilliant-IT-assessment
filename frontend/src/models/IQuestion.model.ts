import { IQuestionType } from "./IQuestionType.enum";

export interface IQuestion {
  id?: number;
  question: string;
  type: IQuestionType;
  filePath?: string;
}
