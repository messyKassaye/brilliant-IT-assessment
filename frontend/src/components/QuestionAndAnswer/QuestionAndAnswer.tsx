import { useAppSelector } from "../../store/redux-hooks/redux-hooks";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import "./questionAndAnswer.css";
const QuestionAndAnswer = () => {
  const { questionAndAnswers } = useAppSelector(
    (state) => state.QuestionAndAnswerSlice
  );
  return (
    <div className="chat-container p-2 w-full">
      {questionAndAnswers.map((questionAndAnswer) => (
        <div
          key={questionAndAnswer.question.question}
          className="chat-message w-full"
        >
          <Question questionAndAnswer={questionAndAnswer} />
          <Answer questionAndAnswer={questionAndAnswer} />
        </div>
      ))}
    </div>
  );
};

export default QuestionAndAnswer;
