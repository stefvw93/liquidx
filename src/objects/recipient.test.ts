import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { recipient } from "./recipient";

describe("Objects/recipient", () => {
	test("recipient properties", () => {
		strictEqual(String(recipient), "recipient");
		strictEqual(String(recipient.email), "recipient.email");
		strictEqual(String(recipient.name), "recipient.name");
		strictEqual(String(recipient.nickname), "recipient.nickname");
	});
});
