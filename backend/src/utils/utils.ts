import { IQuestionType } from "../models/IQuestionType.enum";

export const getQuestionTypeFromFileName = (
  fileName: string
): IQuestionType => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "docx":
      return IQuestionType.DOC;
    case "pdf":
      return IQuestionType.PDF;
    case "txt":
      return IQuestionType.Text;
    case "xls":
      return IQuestionType.XLS;
    default:
      return IQuestionType.DOC;
  }
};
