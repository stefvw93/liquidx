import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { taxLine } from "./tax-line";

describe("Objects/taxLine", () => {
	test("taxLine properties", () => {
		strictEqual(String(taxLine), "tax_line");
		strictEqual(String(taxLine.price), "tax_line.price");
		strictEqual(String(taxLine.rate), "tax_line.rate");
		strictEqual(String(taxLine.ratePercentage), "tax_line.rate_percentage");
		strictEqual(String(taxLine.title), "tax_line.title");
	});
});
