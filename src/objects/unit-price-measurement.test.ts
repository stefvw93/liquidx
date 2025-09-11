import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { unitPriceMeasurement } from "./unit-price-measurement";

describe("Objects/unitPriceMeasurement", () => {
	test("unitPriceMeasurement properties", () => {
		strictEqual(String(unitPriceMeasurement), "unit_price_measurement");
		strictEqual(String(unitPriceMeasurement.measuredType), "unit_price_measurement.measured_type");
		strictEqual(String(unitPriceMeasurement.quantityUnit), "unit_price_measurement.quantity_unit");
		strictEqual(String(unitPriceMeasurement.quantityValue), "unit_price_measurement.quantity_value");
		strictEqual(String(unitPriceMeasurement.referenceUnit), "unit_price_measurement.reference_unit");
		strictEqual(String(unitPriceMeasurement.referenceValue), "unit_price_measurement.reference_value");
	});
});