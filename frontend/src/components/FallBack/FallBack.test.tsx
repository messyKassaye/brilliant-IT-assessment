import { fireEvent, render, screen } from "@testing-library/react";
import FallBack from "./FallBack";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("FallBack component", () => {
  test("renders error messages and button", () => {
    render(<FallBack />);

    const errorMessage = screen.getByText(/Error/i);
    const errorDescription = screen.getByText(
      /Something is not good. please try again/i
    );
    const button = screen.getByText(/Try again/i);
    expect(errorMessage).toBeInTheDocument();
    expect(errorDescription).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("navigate to home when the button is clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(<FallBack />);
    const button = screen.getByRole("button", { name: /Try again/i });
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
