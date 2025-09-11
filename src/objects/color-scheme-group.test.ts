import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { colorSchemeGroup } from "./color-scheme-group";

describe("Objects/colorSchemeGroup", () => {
	test("colorSchemeGroup properties", () => {
		strictEqual(String(colorSchemeGroup), "color_scheme_group");
	});
});
