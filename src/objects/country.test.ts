import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { country } from "./country";

describe("Objects/country", () => {
	test("country properties", () => {
		strictEqual(String(country), "country");
		strictEqual(
			String(country.availableLanguages),
			"country.available_languages",
		);
		strictEqual(String(country.continent), "country.continent");
		strictEqual(String(country.currency), "country.currency");
		strictEqual(String(country.isoCode), "country.iso_code");
		strictEqual(String(country.market), "country.market");
		strictEqual(String(country.name), "country.name");
		strictEqual(String(country["popular?"]), "country['popular?']");
		strictEqual(String(country.unitSystem), "country.unit_system");
	});
});