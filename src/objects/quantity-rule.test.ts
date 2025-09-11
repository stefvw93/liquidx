import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { quantityRule } from "./quantity-rule";

describe("Objects/quantityRule", () => {
	test("quantityRule properties", () => {
		strictEqual(String(quantityRule), "quantity_rule");
		strictEqual(String(quantityRule.increment), "quantity_rule.increment");
		strictEqual(String(quantityRule.max), "quantity_rule.max");
		strictEqual(String(quantityRule.min), "quantity_rule.min");
	});
});
