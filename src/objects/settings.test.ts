import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { settings } from "./settings";

describe("Objects/settings", () => {
	test("settings properties", () => {
		strictEqual(String(settings), "settings");
	});
});