import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { collections } from "./collections";

describe("Objects/collections", () => {
	test("collections properties", () => {
		strictEqual(String(collections), "collections");
	});
});