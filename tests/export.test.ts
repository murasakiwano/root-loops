import { expect, test } from "@playwright/test";

test.describe("export", () => {
  test("can export json format", async ({ page }) => {
    await page.goto("/");

    const exportLink = page.getByRole("link", { name: "Export" });
    await exportLink.click();

    await page.waitForURL("**/export?*");
  });
});
