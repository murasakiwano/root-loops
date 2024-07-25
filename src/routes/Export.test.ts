import { render, screen, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test, vi } from "vitest";

import Export from "./Export.svelte";
import { defaultRecipe } from "$lib/ingredients";
import { ExportFormat } from "$lib/export";

describe("Export component", () => {
  test("export region shows code", () => {
    render(Export, { recipe: defaultRecipe });

    const exportRegion = screen.getByRole("region", { name: "Export" });
    const code = screen.getByRole("code");

    expect(exportRegion).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(code).toHaveTextContent(`"source": "rootloops.sh",`);
  });

  test("copies code to clipboard on click", async () => {
    const clipboardSpy = mockClipboard();

    render(Export, { recipe: defaultRecipe });

    const button = screen.getByRole("button");
    await fireEvent.click(button);

    expect(clipboardSpy.mock.lastCall[0]).toContain(`"source": "rootloops.sh",`);
  });

  test("changes button text on click", async () => {
    render(Export, { recipe: defaultRecipe });

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Copy");

    await fireEvent.click(button);

    expect(button).toHaveTextContent("Copied");
  });

  test("generates json snippet when chosing JSON option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.JSON } });

    expect(code).toHaveTextContent(`"source": "rootloops.sh",`);
  });

  test("generates windows terminal snippet when chosing windows terminal option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.WindowsTerminal } });

    expect(code).toHaveTextContent(`"name": "Root Loops",`);
  });

  test("generates alacritty snippet when chosing alacritty option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.Alacritty } });

    expect(code).toHaveTextContent(`# ~/.config/alacritty/alacritty.toml file`);
  });

  test("generates XResources snippet when chosing XResources option", async () => {
    render(Export, { recipe: defaultRecipe });

    const select = screen.getByRole("combobox");
    const code = screen.getByRole("code");
    await fireEvent.change(select, { target: { value: ExportFormat.XResources } });

    expect(code).toHaveTextContent(`! Copy the configuration below to your ~/.Xresources file`);
  });
});

// testing-library offers a better way to interact with the clipboard, but this seems good enough
function mockClipboard() {
  const writeText = vi.fn();

  Object.assign(navigator, {
    clipboard: {
      writeText,
    },
  });

  return writeText;
}
