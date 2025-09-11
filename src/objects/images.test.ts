import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { images } from "./images";

describe("Objects/images", () => {
	test("images properties", () => {
		strictEqual(String(images), "images");
	});
});