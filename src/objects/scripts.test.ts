import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { scripts } from "./scripts";

describe("Objects/scripts", () => {
	test("scripts properties", () => {
		strictEqual(String(scripts), "scripts");
		strictEqual(
			String(scripts.cartCalculateLineItems),
			"scripts.cart_calculate_line_items",
		);
	});
});
