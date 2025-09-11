import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { fulfillment } from "./fulfillment";

describe("Objects/fulfillment", () => {
	test("fulfillment properties", () => {
		strictEqual(String(fulfillment), "fulfillment");
		strictEqual(String(fulfillment.createdAt), "fulfillment.created_at");
		strictEqual(String(fulfillment.fulfillmentLineItems), "fulfillment.fulfillment_line_items");
		strictEqual(String(fulfillment.itemCount), "fulfillment.item_count");
		strictEqual(String(fulfillment.trackingCompany), "fulfillment.tracking_company");
		strictEqual(String(fulfillment.trackingNumber), "fulfillment.tracking_number");
		strictEqual(String(fulfillment.trackingNumbers), "fulfillment.tracking_numbers");
		strictEqual(String(fulfillment.trackingUrl), "fulfillment.tracking_url");
	});
});