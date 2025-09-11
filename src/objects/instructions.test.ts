import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { instructions } from "./instructions";

describe("Objects/instructions", () => {
	test("instructions properties", () => {
		strictEqual(String(instructions), "instructions");
		strictEqual(String(instructions.canRemove), "instructions.can_remove");
		strictEqual(String(instructions.canUpdateQuantity), "instructions.can_update_quantity");
	});
});