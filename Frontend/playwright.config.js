import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "storefront.spec.js",
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  use: {
    channel: "chrome",
    headless: true,
    launchOptions: { args: ["--disable-gpu"] },
  },
  snapshotPathTemplate: "{testDir}/../test-results/baselines/{arg}{ext}",
});
