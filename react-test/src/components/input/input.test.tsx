import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  test("renders an input element", async () => {
    render(<Input />);
    const inputElement = screen.getByTestId("input");
    await userEvent.type(inputElement, "Hello, World!");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Hello, World!");
  });
});
