import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { forloop } from "./forloop";

describe("Objects/forloop", () => {
	test("forloop properties", () => {
		strictEqual(String(forloop), "forloop");
		strictEqual(String(forloop.first), "forloop.first");
		strictEqual(String(forloop.index), "forloop.index");
		strictEqual(String(forloop.index0), "forloop.index0");
		strictEqual(String(forloop.last), "forloop.last");
		strictEqual(String(forloop.length), "forloop.length");
		strictEqual(String(forloop.parentloop), "forloop.parentloop");
		strictEqual(String(forloop.rindex), "forloop.rindex");
		strictEqual(String(forloop.rindex0), "forloop.rindex0");
	});
});
