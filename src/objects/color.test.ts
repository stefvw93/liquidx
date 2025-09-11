import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { color } from "./color";

describe("Objects/color", () => {
	test("color properties", () => {
		strictEqual(String(color), "color");
		strictEqual(String(color.alpha), "color.alpha");
		strictEqual(String(color.blue), "color.blue");
		strictEqual(String(color.chroma), "color.chroma");
		strictEqual(String(color.colorSpace), "color.color_space");
		strictEqual(String(color.green), "color.green");
		strictEqual(String(color.hue), "color.hue");
		strictEqual(String(color.lightness), "color.lightness");
		strictEqual(String(color.oklch), "color.oklch");
		strictEqual(String(color.oklcha), "color.oklcha");
		strictEqual(String(color.red), "color.red");
		strictEqual(String(color.rgb), "color.rgb");
		strictEqual(String(color.rgba), "color.rgba");
		strictEqual(String(color.saturation), "color.saturation");
	});
});