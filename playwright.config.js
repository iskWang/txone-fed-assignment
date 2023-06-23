// 載入 dotenv
require("dotenv").config();

import { defineConfig } from "@playwright/test";

const baseURL = "http://localhost:3000";

export default defineConfig({
  testDir: "playwright",
  fullyParallel: true,
  use: {
    baseURL,
  },
  // Run your local dev server before starting the tests.
  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
