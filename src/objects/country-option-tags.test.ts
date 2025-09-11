import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { countryOptionTags } from "./country-option-tags";

describe("Objects/countryOptionTags", () => {
	test("countryOptionTags properties", () => {
		strictEqual(String(countryOptionTags), "country_option_tags");
	});
});
