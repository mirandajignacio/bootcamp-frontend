import { render } from "@testing-library/react";
import { Button } from "./index";
import { MyThemeProvider } from "../../routes/root";
describe("Button", () => {
  test("renders button with correct label", () => {
    const label = "Click me";
    const { getByText } = render(
      <MyThemeProvider>
        <Button>{label}</Button>
      </MyThemeProvider>
    );
    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });

  // Add more tests here...
});
