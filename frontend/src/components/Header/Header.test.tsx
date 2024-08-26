import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renders the header with the correct title", () => {
    render(<Header />);

    const headerTitle = screen.getByText(/Brilliant IT/i);
    expect(headerTitle).toBeInTheDocument();

    expect(headerTitle).toHaveClass("font-bold");
  });
});
