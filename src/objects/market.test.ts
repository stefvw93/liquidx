import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { market } from "./market";

describe("Objects/market", () => {
	test("market properties", () => {
		strictEqual(String(market), "market");
		strictEqual(String(market.handle), "market.handle");
		strictEqual(String(market.id), "market.id");
		strictEqual(String(market.metafields), "market.metafields");
	});
});
