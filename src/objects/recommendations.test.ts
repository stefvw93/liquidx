import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { recommendations } from "./recommendations";

describe("Objects/recommendations", () => {
	test("recommendations properties", () => {
		strictEqual(String(recommendations), "recommendations");
		strictEqual(String(recommendations.intent), "recommendations.intent");
		strictEqual(String(recommendations.products), "recommendations.products");
		strictEqual(String(recommendations.productsCount), "recommendations.products_count");
	});
});