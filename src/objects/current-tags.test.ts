import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { currentTags } from "./current-tags";

describe("Objects/currentTags", () => {
	test("currentTags properties", () => {
		strictEqual(String(currentTags), "current_tags");
	});
});