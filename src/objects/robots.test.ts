import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { robots } from "./robots";

describe("Objects/robots", () => {
	test("robots properties", () => {
		strictEqual(String(robots), "robots");
		strictEqual(String(robots.defaultGroups), "robots.default_groups");
	});
});
