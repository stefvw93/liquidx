import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { policy } from "./policy";

describe("Objects/policy", () => {
	test("policy properties", () => {
		strictEqual(String(policy), "policy");
		strictEqual(String(policy.body), "policy.body");
		strictEqual(String(policy.id), "policy.id");
		strictEqual(String(policy.title), "policy.title");
		strictEqual(String(policy.url), "policy.url");
	});
});