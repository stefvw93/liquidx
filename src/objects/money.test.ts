import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { money } from "./money";

describe("Objects/money", () => {
	test("money properties", () => {
		strictEqual(String(money), "money");
		strictEqual(String(money.currency), "money.currency");
	});
});
