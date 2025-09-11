import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { rule } from "./rule";

describe("Objects/rule", () => {
	test("rule properties", () => {
		strictEqual(String(rule), "rule");
		strictEqual(String(rule.directive), "rule.directive");
		strictEqual(String(rule.value), "rule.value");
	});
});