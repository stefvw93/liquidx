import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { part } from "./part";

describe("Objects/part", () => {
	test("part properties", () => {
		strictEqual(String(part), "part");
		strictEqual(String(part.isLink), "part.is_link");
		strictEqual(String(part.title), "part.title");
		strictEqual(String(part.url), "part.url");
	});
});