import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { brandColor } from "./brand-color";

describe("Objects/brandColor", () => {
	test("brandColor properties", () => {
		strictEqual(String(brandColor), "brand_color");
	});
});