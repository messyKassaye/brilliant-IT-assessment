import { Icon } from "@iconify/react";
import { IQuestion } from "../../../../models/IQuestion.model";

type Props = {
  question: IQuestion;
};
const FileQuestion = ({ question }: Props) => {
  return (
    <div className="flex flex-col items-end justify-start">
      <div className="flex items-center justify-between gap-2">
        <Icon data-testid="file-icon" icon={"ph:file-doc"} fontSize={28} />
        <span data-testid="file-name">{question.fileName}</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span data-testid="file-path">{question.filePath}</span>
      </div>
    </div>
  );
};

export default FileQuestion;
