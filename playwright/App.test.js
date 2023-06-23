import { test, expect } from "@playwright/test";

const testText = "Hello world!";

test("App renders correctly", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const pageContent = await page.textContent("body");

  expect(pageContent).toContain(testText);
});
