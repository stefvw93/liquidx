import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { linklist } from "./linklist";

describe("Objects/linklist", () => {
	test("linklist properties", () => {
		strictEqual(String(linklist), "linklist");
		strictEqual(String(linklist.handle), "linklist.handle");
		strictEqual(String(linklist.levels), "linklist.levels");
		strictEqual(String(linklist.links), "linklist.links");
		strictEqual(String(linklist.title), "linklist.title");
	});
});