import { render, screen, logDOM } from "@testing-library/react";
import { Button } from "./button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders the button with the provided children", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", async () => {
    let value = 0;
    const onClick = () => {
      value = 1;
    };
    const buttonText = "Click me";
    render(<Button onClick={onClick}>{buttonText}</Button>);
    const buttonElement = screen.getByTestId("button");

    await userEvent.click(buttonElement);
    logDOM(buttonElement);
    expect(value).toBe(1);
  });
});
