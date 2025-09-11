import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { link } from "./link";

describe("Objects/link", () => {
	test("link properties", () => {
		strictEqual(String(link), "link");
		strictEqual(String(link.active), "link.active");
		strictEqual(String(link.childActive), "link.child_active");
		strictEqual(String(link.childCurrent), "link.child_current");
		strictEqual(String(link.current), "link.current");
		strictEqual(String(link.handle), "link.handle");
		strictEqual(String(link.levels), "link.levels");
		strictEqual(String(link.links), "link.links");
		strictEqual(String(link.object), "link.object");
		strictEqual(String(link.title), "link.title");
		strictEqual(String(link.type), "link.type");
		strictEqual(String(link.url), "link.url");
	});
});
