import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { allCountryOptionTags } from "./all-country-option-tags";

describe("Objects/allCountryOptionTags", () => {
	test("allCountryOptionTags", () => {
		strictEqual(String(allCountryOptionTags), "all_country_option_tags");
	});
});