import { IQuestionAndAnswer } from "../../../models/IQuestionAndAnswer.model";
import { IQuestionType } from "../../../models/IQuestionType.enum";
import FileQuestion from "./components/FileQuestion";

type Props = {
  questionAndAnswer: IQuestionAndAnswer;
};
const Question = ({ questionAndAnswer }: Props) => {
  return (
    <div className="flex items-center justify-end w-full  mb-10">
      <div className="question-and-answer-style">
        {questionAndAnswer.questionType !== IQuestionType.Text ? (
          <FileQuestion question={questionAndAnswer.question} />
        ) : (
          <span>{questionAndAnswer.question.question}</span>
        )}
      </div>
    </div>
  );
};

export default Question;
