import Color from 'colorjs.io';

export function equalHueDistance(count: number, l: number = 0.6, c: number = 0.2): Color[] {
	const h = (i: number) => hue(i, count, 15);

	return new Array(count).fill(undefined).map((_color, i) => new Color('oklch', [l, c, h(i)]));
}

export function equalLightnessDistance(count: number, chroma: number = 0.02): Color[] {
	const l = (i: number) => lightness(i, count);

	return new Array(count)
		.fill(undefined)
		.map((_color, i) => new Color('oklch', [l(i), chroma, 340]));
}

function hue(index: number, colorCount: number, shift: number = 0): number {
	const maxHue = 360;
	const step = maxHue / colorCount;
	return Math.round(step * index) + shift;
}

function lightness(index: number, colorCount: number): number {
	const maxLightness = 100;
	const step = maxLightness / (colorCount - 1);
	return Math.round(step * index) / 100;
}

export function crunch() {
	const baseColors = equalLightnessDistance(4, 0.02);
	const accentColors = equalHueDistance(6, 0.6, 0.2);
	const brightAccentColors = equalHueDistance(6, 0.7, 0.2);
	const cereals = {
		'black': baseColors[0],
		'red': accentColors[0],
		'green': accentColors[2],
		'yellow': accentColors[1],
		'blue': accentColors[4],
		'magenta': accentColors[5],
		'cyan': accentColors[3],
		'white': baseColors[1],
		'bright_black': baseColors[2],
		'bright_red': brightAccentColors[0],
		'bright_green': brightAccentColors[2],
		'bright_yellow': brightAccentColors[1],
		'bright_blue': brightAccentColors[4],
		'bright_magenta': brightAccentColors[5],
		'bright_cyan': brightAccentColors[3],
		'bright_white': baseColors[3],
  };
	return cereals;
}
