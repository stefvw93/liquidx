import { strictEqual } from "node:assert";
import test, { describe } from "node:test";
import { additionalCheckoutButtons } from "./additional-checkout-buttons";
import { address } from "./address";

describe("Objects", () => {
	test("additionalCheckoutButtons", () => {
		strictEqual(
			String(additionalCheckoutButtons),
			"additional_checkout_buttons",
		);
	});

	test("address", () => {
		strictEqual(String(address), "address");
		strictEqual(String(address.address1), "address.address1");
		strictEqual(String(address.address2), "address.address2");
		strictEqual(String(address.city), "address.city");
		strictEqual(String(address.company), "address.company");
		strictEqual(String(address.country), "address.country");
		strictEqual(String(address.countryCode), "address.country_code");
		strictEqual(String(address.firstName), "address.first_name");
		strictEqual(String(address.id), "address.id");
		strictEqual(String(address.lastName), "address.last_name");
		strictEqual(String(address.name), "address.name");
		strictEqual(String(address.phone), "address.phone");
		strictEqual(String(address.province), "address.province");
		strictEqual(String(address.provinceCode), "address.province_code");
		strictEqual(String(address.street), "address.street");
		strictEqual(String(address.summary), "address.summary");
		strictEqual(String(address.url), "address.url");
		strictEqual(String(address.zip), "address.zip");
	});
});
