import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { font } from "./font";

describe("Objects/font", () => {
	test("font properties", () => {
		strictEqual(String(font), "font");
		strictEqual(String(font.baselineRatio), "font.baseline_ratio");
		strictEqual(String(font.fallbackFamilies), "font.fallback_families");
		strictEqual(String(font.family), "font.family");
		strictEqual(String(font.style), "font.style");
		strictEqual(String(font.variants), "font.variants");
		strictEqual(String(font.weight), "font.weight");
	});
});
