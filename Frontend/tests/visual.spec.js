import { test, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const pages = [
  "index",
  "tshirts",
  "collections",
  "about",
  "contact",
  "product",
  "cart",
  "wishlist",
  "login",
  "account",
];

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            }),
      ),
    );
  });
  await page.waitForTimeout(300);
}

for (const width of [1440, 390]) {
  for (const slug of pages) {
    test(`${slug}: content matches original at ${width}px`, async ({
      browser,
    }, testInfo) => {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        deviceScaleFactor: 1,
      });
      const original = await context.newPage();
      const converted = await context.newPage();
      const errors = [];
      converted.on("pageerror", (error) => errors.push(error.message));
      await original.goto(`http://127.0.0.1:4174/${slug}.html`);
      await original.waitForFunction(() =>
        [...document.styleSheets].some((sheet) => {
          try {
            return [...sheet.cssRules].some((rule) =>
              rule.cssText.includes("--tw-border-spacing-x"),
            );
          } catch {
            return false;
          }
        }),
      );
      await settle(original);
      await converted.goto(`http://127.0.0.1:5173/${slug}.html`);
      await converted.locator("main").waitFor();
      await settle(converted);
      await original.addStyleTag({ content: '.site-header { visibility: hidden; }' });
      await converted.addStyleTag({ content: '.site-header { visibility: hidden; }' });
      // Navigation has an intentionally updated design; preserve content parity.
      for (const selector of ["main", ".site-footer"]) {
        const name = `${slug}-${width}-${selector === "main" ? "main" : "footer"}.png`;
        const baseline = testInfo.snapshotPath(name);
        await mkdir(dirname(baseline), { recursive: true });
        await writeFile(
          baseline,
          await original
            .locator(selector)
            .screenshot({ animations: "disabled" }),
        );
        expect(
          await converted
            .locator(selector)
            .screenshot({ animations: "disabled" }),
        ).toMatchSnapshot(name, { maxDiffPixels: 0 });
      }
      expect(errors).toEqual([]);
      await context.close();
    });
  }
}
