import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("App component rendered Header component", () => {
    render(<App />);
    // Check is Header component rendered
    const headerTitle = screen.getByText(/Brilliant IT/i);
    expect(headerTitle).toBeInTheDocument();
  });
});
