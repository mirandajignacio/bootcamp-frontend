import { sum } from "./sum";
import { describe, expect, test } from "vitest";

describe("sum function", () => {
  test("sum function should return the correct sum", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  test("sum function should handle negative numbers", () => {
    const result = sum(-5, 10);
    expect(result).toBe(5);
  });

  test("sum function should return 0 when both inputs are 0", () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });
});
