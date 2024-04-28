import { hello } from "./hello";

test("hello function should return a greeting message", () => {
  const name = "John";
  const result = hello(name);
  expect(result).toBe(`Hello, ${name}!`);
});

test("hello function should handle empty name", () => {
  const name = "";
  const result = hello(name);
  expect(result).toBe("Hello, Guest!");
});

test("hello function should handle undefined name", () => {
  const name = undefined;
  const result = hello(name);
  expect(result).toBe("Hello, Guest!");
});
