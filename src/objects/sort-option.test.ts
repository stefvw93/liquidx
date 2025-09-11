import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { sortOption } from "./sort-option";

describe("Objects/sortOption", () => {
	test("sortOption properties", () => {
		strictEqual(String(sortOption), "sort_option");
		strictEqual(String(sortOption.name), "sort_option.name");
		strictEqual(String(sortOption.value), "sort_option.value");
	});
});