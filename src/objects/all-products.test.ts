import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { allProducts } from "./all-products";

describe("Objects/allProducts", () => {
	test("allProducts", () => {
		strictEqual(
			String(allProducts["some-product"]),
			"all_products['some-product']",
		);
	});
});