import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { currency } from "./currency";

describe("Objects/currency", () => {
	test("currency properties", () => {
		strictEqual(String(currency), "currency");
		strictEqual(String(currency.isoCode), "currency.iso_code");
		strictEqual(String(currency.name), "currency.name");
		strictEqual(String(currency.symbol), "currency.symbol");
	});
});