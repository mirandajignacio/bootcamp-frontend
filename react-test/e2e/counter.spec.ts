import { test, expect } from "@playwright/test";

test.describe("Counter", () => {
  test("Click", async ({ page }) => {
    await page.goto("localhost:5173");
    await page.click("text=count is 0");
    await page.getByText("count is 1");
    await page.click("text=count is 1");
    const button = await page.getByText("count is 2");
    // Expect a title "to contain" a substring.
    await expect(button).toHaveText("count is 2");
  });
});
