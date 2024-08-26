import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useAppDispatch } from "../../store/redux-hooks/redux-hooks";
import QuestionForm from "./QuestionForm";
import AxiosService from "../../services/https.service";

// Mock the Axios service
jest.mock("../../services/https.service");
jest.mock("../../store/redux-hooks/redux-hooks", () => ({
  useAppDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

beforeEach(() => {
  (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
});

afterEach(() => {
  jest.clearAllMocks();
});
describe("QuestionForm Component", () => {
  it("renders the component correctly", () => {
    render(<QuestionForm />);

    // Check if the input and button are present
    expect(
      screen.getByPlaceholderText("Enter your question...")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("uploads a file and updates progress", async () => {
    const mockFile = new File(["CV_PDF"], "meseret_kassaye_CV.pdf", {
      type: "application/pdf",
    });
    const mockResponse = {
      data: { question: "Sample Question", answer: "Sample Answer" },
    };

    (AxiosService as jest.Mock).mockReturnValue({
      post: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    render(<QuestionForm />);

    const fileInput = screen.getByTestId("upload-icon");
    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    // Wait for the upload progress to update
    await waitFor(() => {
      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    // Verify that the updateQuestionAndAnswer action was dispatched
    expect(mockDispatch).toHaveBeenCalledWith(mockResponse.data);
  });
});
