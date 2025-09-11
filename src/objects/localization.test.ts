import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { localization } from "./localization";

describe("Objects/localization", () => {
	test("localization properties", () => {
		strictEqual(String(localization), "localization");
		strictEqual(String(localization.availableCountries), "localization.available_countries");
		strictEqual(String(localization.availableLanguages), "localization.available_languages");
		strictEqual(String(localization.country), "localization.country");
		strictEqual(String(localization.language), "localization.language");
		strictEqual(String(localization.market), "localization.market");
	});
});