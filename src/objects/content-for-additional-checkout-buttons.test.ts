import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { contentForAdditionalCheckoutButtons } from "./content-for-additional-checkout-buttons";

describe("Objects/contentForAdditionalCheckoutButtons", () => {
	test("contentForAdditionalCheckoutButtons properties", () => {
		strictEqual(
			String(contentForAdditionalCheckoutButtons),
			"content_for_additional_checkout_buttons",
		);
	});
});
