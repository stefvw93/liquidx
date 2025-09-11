import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { handle } from "./handle";

describe("Objects/handle", () => {
	test("handle properties", () => {
		strictEqual(String(handle), "handle");
	});
});
