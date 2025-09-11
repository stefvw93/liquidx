import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { productOption } from "./product-option";

describe("Objects/productOption", () => {
	test("productOption properties", () => {
		strictEqual(String(productOption), "product_option");
		strictEqual(String(productOption.name), "product_option.name");
		strictEqual(String(productOption.position), "product_option.position");
		strictEqual(
			String(productOption.selectedValue),
			"product_option.selected_value",
		);
		strictEqual(String(productOption.values), "product_option.values");
	});
});
