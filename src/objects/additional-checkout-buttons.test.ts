import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { additionalCheckoutButtons } from "./additional-checkout-buttons";

describe("Objects/additionalCheckoutButtons", () => {
	test("additionalCheckoutButtons", () => {
		strictEqual(
			String(additionalCheckoutButtons),
			"additional_checkout_buttons",
		);
	});
});