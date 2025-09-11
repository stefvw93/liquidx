import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { user } from "./user";

describe("Objects/user", () => {
	test("user properties", () => {
		strictEqual(String(user), "user");
		strictEqual(String(user.accountOwner), "user.account_owner");
		strictEqual(String(user.bio), "user.bio");
		strictEqual(String(user.email), "user.email");
		strictEqual(String(user.firstName), "user.first_name");
		strictEqual(String(user.homepage), "user.homepage");
		strictEqual(String(user.image), "user.image");
		strictEqual(String(user.lastName), "user.last_name");
		strictEqual(String(user.name), "user.name");
	});
});