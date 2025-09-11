import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { storeAvailability } from "./store-availability";

describe("Objects/storeAvailability", () => {
	test("storeAvailability properties", () => {
		strictEqual(String(storeAvailability), "store_availability");
		strictEqual(
			String(storeAvailability.available),
			"store_availability.available",
		);
		strictEqual(
			String(storeAvailability.location),
			"store_availability.location",
		);
		strictEqual(
			String(storeAvailability.pickUpEnabled),
			"store_availability.pick_up_enabled",
		);
		strictEqual(
			String(storeAvailability.pickUpTime),
			"store_availability.pick_up_time",
		);
	});
});
