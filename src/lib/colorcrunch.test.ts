import Color from "colorjs.io";
import { describe, expect, it } from "vitest";
import { crunch, equalHueDistance, equalLightnessDistance } from "./colorcrunch";

describe("equalHueDistance", () => {
  it("generates the right amount of colors", () => {
    let colors = equalHueDistance(16);
    expect(colors.length).toBe(16);
  });

  it("generates colors in oklch space", () => {
    let colors = equalHueDistance(5);
    expect(colors.every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
  });

  it("generates colors with equal hue distance", () => {
    let colors = equalHueDistance(8, 0.6, 0.2);

    expect(colors[0].h).toBe(15);
    expect(colors[1].h).toBe(60);
    expect(colors[2].h).toBe(105);
    expect(colors[3].h).toBe(150);
    expect(colors[4].h).toBe(195);
    expect(colors[5].h).toBe(240);
    expect(colors[6].h).toBe(285);
    expect(colors[7].h).toBe(330);
  });

  it("generates colors with given lightness and chroma values", () => {
    let colors = equalHueDistance(1, 0.2, 0.1);

    expect(colors[0].l).toBe(0.2);
    expect(colors[0].c).toBe(0.1);
  });

  it("generates bowl colors with given chroma value", () => {
    let colors = equalHueDistance(1, 0.2);

    expect(colors[0].c).toBe(0.2);
  });
});

describe("equalLightnessDistance", () => {
  it("generates bowl colors in oklch space", () => {
    let colors = equalLightnessDistance(5);
    expect(colors.every((c) => c.space === Color.spaces.oklch)).toBeTruthy();
  });

  it("generates the right amount of colors", () => {
    let colors = equalLightnessDistance(16);
    expect(colors.length).toBe(16);
  });

  it("generates colors with equal lightness distance", () => {
    let colors = equalLightnessDistance(4);

    expect(colors[0].l).toBe(0);
    expect(colors[1].l).toBe(0.33);
    expect(colors[2].l).toBe(0.67);
    expect(colors[3].l).toBe(1);
  });

  it("generates colors with given chroma values", () => {
    let colors = equalLightnessDistance(2, 0.2);

    expect(colors[0].c).toBe(0.2);
    expect(colors[1].c).toBe(0.2);
  });
});

describe("crunch", () => {
  it("generates base tone cereals with low chroma", () => {
    let cereals = crunch();

    expect(cereals.black.c).toBeLessThan(0.03);
    expect(cereals.white.c).toBeLessThan(0.03);
    expect(cereals.brightBlack.c).toBeLessThan(0.03);
    expect(cereals.brightWhite.c).toBeLessThan(0.03);
  });

  it("generates base tone cereals with increasing lightness", () => {
    let cereals = crunch();

    expect(cereals.brightWhite.l).toBeGreaterThan(cereals.white.l);
    expect(cereals.white.l).toBeGreaterThan(cereals.brightBlack.l);
    expect(cereals.brightBlack.l).toBeGreaterThan(cereals.black.l);
  });

  it("generates red tone cereals with right hue", () => {
    const cereals = crunch();

    expect(cereals.red.h).toBeGreaterThanOrEqual(0);
    expect(cereals.red.h).toBeLessThanOrEqual(60);

    expect(cereals.brightRed.h).toBeGreaterThanOrEqual(0);
    expect(cereals.brightRed.h).toBeLessThanOrEqual(60);
  });

  it("generates yellow tone cereals with right hue", () => {
    const cereals = crunch();

    expect(cereals.yellow.h).toBeGreaterThanOrEqual(60);
    expect(cereals.yellow.h).toBeLessThanOrEqual(120);

    expect(cereals.brightYellow.h).toBeGreaterThanOrEqual(60);
    expect(cereals.brightYellow.h).toBeLessThanOrEqual(120);
  });

  it("generates green tone cereals with right hue", () => {
    const cereals = crunch();

    expect(cereals.green.h).toBeGreaterThanOrEqual(120);
    expect(cereals.green.h).toBeLessThanOrEqual(180);

    expect(cereals.brightGreen.h).toBeGreaterThanOrEqual(120);
    expect(cereals.brightGreen.h).toBeLessThanOrEqual(180);
  });

  it("generates cyan tone cereals with right hue", () => {
    const cereals = crunch();

    expect(cereals.cyan.h).toBeGreaterThanOrEqual(180);
    expect(cereals.cyan.h).toBeLessThanOrEqual(240);

    expect(cereals.brightCyan.h).toBeGreaterThanOrEqual(180);
    expect(cereals.brightCyan.h).toBeLessThanOrEqual(240);
  });

  it("generates blue tone cereals with right hue", () => {
    const cereals = crunch();

    expect(cereals.blue.h).toBeGreaterThanOrEqual(240);
    expect(cereals.blue.h).toBeLessThanOrEqual(300);

    expect(cereals.brightBlue.h).toBeGreaterThanOrEqual(240);
    expect(cereals.brightBlue.h).toBeLessThanOrEqual(300);
  });

  it("generates magenta tone cereals with right hue", () => {
    const cereals = crunch();

    expect(cereals.magenta.h).toBeGreaterThanOrEqual(300);
    expect(cereals.magenta.h).toBeLessThanOrEqual(360);

    expect(cereals.brightMagenta.h).toBeGreaterThanOrEqual(300);
    expect(cereals.brightMagenta.h).toBeLessThanOrEqual(360);
  });

  it("generates bright colors with higher lightness than regular colors", () => {
    const cereals = crunch();

    expect(cereals.brightBlack.l).toBeGreaterThan(cereals.black.l);
    expect(cereals.brightRed.l).toBeGreaterThan(cereals.red.l);
    expect(cereals.brightGreen.l).toBeGreaterThan(cereals.green.l);
    expect(cereals.brightYellow.l).toBeGreaterThan(cereals.yellow.l);
    expect(cereals.brightBlue.l).toBeGreaterThan(cereals.blue.l);
    expect(cereals.brightMagenta.l).toBeGreaterThan(cereals.magenta.l);
    expect(cereals.brightCyan.l).toBeGreaterThan(cereals.cyan.l);
    expect(cereals.brightWhite.l).toBeGreaterThan(cereals.white.l);
  });
});
