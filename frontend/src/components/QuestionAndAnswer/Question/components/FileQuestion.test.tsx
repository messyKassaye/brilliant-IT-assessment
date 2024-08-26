import { render, screen } from "@testing-library/react";
import { IQuestion } from "../../../../models/IQuestion.model";
import { IQuestionType } from "../../../../models/IQuestionType.enum";
import FileQuestion from "./FileQuestion";

const mockQuestion: IQuestion = {
  questionType: IQuestionType.DOC,
  fileName: "basic_NLP.docx",
  filePath: "https://shinda.app/files/basic_NLP.docx",
};

describe("FileQuestion Component", () => {
  test("Render the file icon, file name, and file path", () => {
    render(<FileQuestion question={mockQuestion} />);
    // Check if the file name is rendered correctly
    const fileNameElement = screen.getByTestId("file-name");
    expect(fileNameElement).toContain("basic_NLP.docx");

    // Check if the file path is rendered correctly
    const filePathElement = screen.getByTestId("file-path");
    expect(filePathElement).toContain("basic_NLP.docx");

    // Check if the icon is rendered correctly
    const iconElement = screen.getByTestId("file-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
