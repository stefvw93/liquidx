import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { rating } from "./rating";

describe("Objects/rating", () => {
	test("rating properties", () => {
		strictEqual(String(rating), "rating");
		strictEqual(String(rating.rating), "rating.rating");
		strictEqual(String(rating.scaleMax), "rating.scale_max");
		strictEqual(String(rating.scaleMin), "rating.scale_min");
	});
});