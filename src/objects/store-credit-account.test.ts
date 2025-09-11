import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { storeCreditAccount } from "./store-credit-account";

describe("Objects/storeCreditAccount", () => {
	test("storeCreditAccount properties", () => {
		strictEqual(String(storeCreditAccount), "store_credit_account");
		strictEqual(String(storeCreditAccount.balance), "store_credit_account.balance");
	});
});