import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { companyAddress } from "./company-address";

describe("Objects/companyAddress", () => {
	test("companyAddress properties", () => {
		strictEqual(String(companyAddress), "company_address");
		strictEqual(String(companyAddress.address1), "company_address.address1");
		strictEqual(String(companyAddress.address2), "company_address.address2");
		strictEqual(String(companyAddress.attention), "company_address.attention");
		strictEqual(String(companyAddress.city), "company_address.city");
		strictEqual(String(companyAddress.country), "company_address.country");
		strictEqual(String(companyAddress.countryCode), "company_address.country_code");
		strictEqual(String(companyAddress.firstName), "company_address.first_name");
		strictEqual(String(companyAddress.id), "company_address.id");
		strictEqual(String(companyAddress.lastName), "company_address.last_name");
		strictEqual(String(companyAddress.province), "company_address.province");
		strictEqual(String(companyAddress.provinceCode), "company_address.province_code");
		strictEqual(String(companyAddress.street), "company_address.street");
		strictEqual(String(companyAddress.zip), "company_address.zip");
	});
});