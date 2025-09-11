import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { companyLocation } from "./company-location";

describe("Objects/companyLocation", () => {
	test("companyLocation properties", () => {
		strictEqual(String(companyLocation), "company_location");
		strictEqual(String(companyLocation.company), "company_location.company");
		strictEqual(String(companyLocation.externalId), "company_location.external_id");
		strictEqual(String(companyLocation.id), "company_location.id");
		strictEqual(String(companyLocation.metafields), "company_location.metafields");
		strictEqual(String(companyLocation.name), "company_location.name");
		strictEqual(String(companyLocation.shippingAddress), "company_location.shipping_address");
		strictEqual(String(companyLocation.taxRegistrationId), "company_location.tax_registration_id");
		strictEqual(String(companyLocation.urlToSetAsCurrent), "company_location.url_to_set_as_current");
	});
});