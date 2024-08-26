import { render, screen } from "@testing-library/react";
import { useAppSelector } from "../../store/redux-hooks/redux-hooks";
import QuestionAndAnswer from "./QuestionAndAnswer";

describe("QuestionAndAnswer Component", () => {
  //Mock data to Redux state
  const mockQuestionAndAnswers = [
    {
      question: { question: "Hello there?" },
      answer: { answer: "Hi, how can I help you today." },
    },
  ];
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue({
      questionAndAnswers: mockQuestionAndAnswers,
    });
  });

  test("render the component correctly", () => {
    render(<QuestionAndAnswer />);
    // check if the question  is rendered
    const questionText = screen.getByText("Hello there?");
    expect(questionText).toBeInTheDocument();

    // check if the answer is rendered
    const answerText = screen.getByText("Hi, how can I help you today.");
    expect(answerText).toBeInTheDocument();
  });
});
