import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { measurement } from "./measurement";

describe("Objects/measurement", () => {
	test("measurement properties", () => {
		strictEqual(String(measurement), "measurement");
		strictEqual(String(measurement.type), "measurement.type");
		strictEqual(String(measurement.unit), "measurement.unit");
		strictEqual(String(measurement.value), "measurement.value");
	});
});