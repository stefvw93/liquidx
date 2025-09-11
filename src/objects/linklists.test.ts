import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { linklists } from "./linklists";

describe("Objects/linklists", () => {
	test("linklists properties", () => {
		strictEqual(String(linklists), "linklists");
	});
});