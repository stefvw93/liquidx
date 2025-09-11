import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { company } from "./company";

describe("Objects/company", () => {
	test("company properties", () => {
		strictEqual(String(company), "company");
		strictEqual(
			String(company.availableLocations),
			"company.available_locations",
		);
		strictEqual(
			String(company.availableLocationsCount),
			"company.available_locations_count",
		);
		strictEqual(String(company.externalId), "company.external_id");
		strictEqual(String(company.id), "company.id");
		strictEqual(String(company.metafields), "company.metafields");
		strictEqual(String(company.name), "company.name");
	});
});
