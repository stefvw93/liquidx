import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { colorScheme } from "./color-scheme";

describe("Objects/colorScheme", () => {
	test("colorScheme properties", () => {
		strictEqual(String(colorScheme), "color_scheme");
		strictEqual(String(colorScheme.id), "color_scheme.id");
		strictEqual(String(colorScheme.settings), "color_scheme.settings");
	});
});