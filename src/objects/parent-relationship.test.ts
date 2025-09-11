import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { parentRelationship } from "./parent-relationship";

describe("Objects/parentRelationship", () => {
	test("parentRelationship properties", () => {
		strictEqual(String(parentRelationship), "parent_relationship");
		strictEqual(String(parentRelationship.parent), "parent_relationship.parent");
	});
});