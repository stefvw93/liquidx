import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { swatch } from "./swatch";

describe("Objects/swatch", () => {
	test("swatch properties", () => {
		strictEqual(String(swatch), "swatch");
		strictEqual(String(swatch.color), "swatch.color");
		strictEqual(String(swatch.image), "swatch.image");
	});
});