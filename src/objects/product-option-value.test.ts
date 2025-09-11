import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { productOptionValue } from "./product-option-value";

describe("Objects/productOptionValue", () => {
	test("productOptionValue properties", () => {
		strictEqual(String(productOptionValue), "product_option_value");
		strictEqual(
			String(productOptionValue.available),
			"product_option_value.available",
		);
		strictEqual(String(productOptionValue.id), "product_option_value.id");
		strictEqual(String(productOptionValue.name), "product_option_value.name");
		strictEqual(
			String(productOptionValue.productUrl),
			"product_option_value.product_url",
		);
		strictEqual(
			String(productOptionValue.selected),
			"product_option_value.selected",
		);
		strictEqual(
			String(productOptionValue.swatch),
			"product_option_value.swatch",
		);
		strictEqual(
			String(productOptionValue.variant),
			"product_option_value.variant",
		);
	});
});
