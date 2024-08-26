import { render, screen } from "@testing-library/react";
import { IAnswer } from "../../../../models/IAnswer.model";
import FileAnswer from "./FileAnswer";

describe("FileAnswer component", () => {
  test("renders tokens correctly", () => {
    const mockAnswer: IAnswer = {
      tokens: ["token1", "token2", "token3"],
      entities: [],
      sentiment: [],
    };

    render(<FileAnswer answer={mockAnswer} />);

    // Check if tokens are rendered
    mockAnswer.tokens?.forEach((token) => {
      expect(screen.getByText(token)).toBeInTheDocument();
    });
  });

  test("renders nothing when tokens, entities, and sentiment are undefined", () => {
    const mockAnswer: IAnswer = {
      entities: [], // Entities can be an empty array
    };

    render(<FileAnswer answer={mockAnswer} />);
    // Check that nothing is rendered
    expect(screen.queryByText("Tokens")).toBeNull();
    expect(screen.queryByText("Named Entities")).toBeNull();
    expect(screen.queryByText("Sentiment analysis")).toBeNull();
  });
});
