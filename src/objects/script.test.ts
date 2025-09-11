import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { script } from "./script";

describe("Objects/script", () => {
	test("script properties", () => {
		strictEqual(String(script), "script");
		strictEqual(String(script.id), "script.id");
		strictEqual(String(script.name), "script.name");
	});
});
