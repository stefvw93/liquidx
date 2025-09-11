import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { block } from "./block";

describe("Objects/block", () => {
	test("block properties", () => {
		strictEqual(String(block), "block");
		strictEqual(String(block.id), "block.id");
		strictEqual(String(block.settings), "block.settings");
		strictEqual(String(block.shopifyAttributes), "block.shopify_attributes");
		strictEqual(String(block.type), "block.type");
	});
});