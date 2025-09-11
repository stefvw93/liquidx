import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { theme } from "./theme";

describe("Objects/theme", () => {
	test("theme properties", () => {
		strictEqual(String(theme), "theme");
		strictEqual(String(theme.id), "theme.id");
		strictEqual(String(theme.name), "theme.name");
		strictEqual(String(theme.role), "theme.role");
	});
});