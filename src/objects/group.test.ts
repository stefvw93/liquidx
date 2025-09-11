import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { group } from "./group";

describe("Objects/group", () => {
	test("group properties", () => {
		strictEqual(String(group), "group");
		strictEqual(String(group.rules), "group.rules");
		strictEqual(String(group.sitemap), "group.sitemap");
		strictEqual(String(group.userAgent), "group.user_agent");
	});
});