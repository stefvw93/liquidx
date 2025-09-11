import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { location } from "./location";

describe("Objects/location", () => {
	test("location properties", () => {
		strictEqual(String(location), "location");
		strictEqual(String(location.address), "location.address");
		strictEqual(String(location.id), "location.id");
		strictEqual(String(location.latitude), "location.latitude");
		strictEqual(String(location.longitude), "location.longitude");
		strictEqual(String(location.metafields), "location.metafields");
		strictEqual(String(location.name), "location.name");
	});
});