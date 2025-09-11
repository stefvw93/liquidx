import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { userAgent } from "./user-agent";

describe("Objects/userAgent", () => {
	test("userAgent properties", () => {
		strictEqual(String(userAgent), "user_agent");
		strictEqual(String(userAgent.directive), "user_agent.directive");
		strictEqual(String(userAgent.value), "user_agent.value");
	});
});