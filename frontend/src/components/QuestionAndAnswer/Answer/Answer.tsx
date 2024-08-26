import { IQuestionAndAnswer } from "../../../models/IQuestionAndAnswer.model";
import { IQuestionType } from "../../../models/IQuestionType.enum";
import FileAnswer from "./components/FileAnswer";

type Props = {
  questionAndAnswer: IQuestionAndAnswer;
};
const Answer = ({ questionAndAnswer }: Props) => {
  return (
    <div className="flex items-start justify-start w-full">
      {questionAndAnswer.questionType !== IQuestionType.Text ? (
        <FileAnswer answer={questionAndAnswer.answer} />
      ) : (
        <div>{questionAndAnswer.answer.answer}</div>
      )}
    </div>
  );
};

export default Answer;
