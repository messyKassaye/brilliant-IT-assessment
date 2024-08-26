import { render, screen } from "@testing-library/react";
import { IQuestionAndAnswer } from "../../../models/IQuestionAndAnswer.model";
import { IQuestionType } from "../../../models/IQuestionType.enum";
import Question from "./Question";

describe("Question Component", () => {
  const mockTextQuestion: IQuestionAndAnswer = {
    question: {
      question: "How are you today?",
      questionType: IQuestionType.Text,
    },
    questionType: IQuestionType.Text,
    answer: {
      answer: "I can't tell that exactly. I'm just supportive computer",
    },
  };

  const mockFileQuestion: IQuestionAndAnswer = {
    question: {
      question: "Upload your profile picture.",
      questionType: IQuestionType.DOC,
    },
    questionType: IQuestionType.DOC,
    answer: { answer: "Profile picture uploaded." },
  };

  test("renders a text question", () => {
    render(<Question questionAndAnswer={mockTextQuestion} />);

    //check if text question is rendered
    const textQuestion = screen.getByText("How are you today?");
    expect(textQuestion).toBeInTheDocument();
  });

  test("render a file question", () => {
    render(<Question questionAndAnswer={mockFileQuestion} />);

    //check if file question is rendered
    const fileQuestion = screen.getByText("Upload your profile picture.");
    expect(fileQuestion).toBeInTheDocument();
  });
});
