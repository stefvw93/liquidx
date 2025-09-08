import { LineItem } from "@/objects/line-item";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * An order [fulfillment](https://help.shopify.com/manual/orders/fulfillment), which includes information like the line items being fulfilled and shipment tracking.

*/
export class Fulfillment extends LiquidObject {
	/**
	 * A timestamp for when the fulfillment was created.
	 */
	@LiquidObject.property() get createdAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The line items in the fulfillment.
	 */
	@LiquidObject.property() get fulfillmentLineItems() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The number of items in the fulfillment.
	 */
	@LiquidObject.property() get itemCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the fulfillment service.
	 */
	@LiquidObject.property() get trackingCompany() {
		return new DataType(Primitive.string);
	}

	/**
	 * The fulfillment's tracking number.
	 */
	@LiquidObject.property() get trackingNumber() {
		return new DataType(Primitive.string);
	}

	/**
	 * An array of the fulfillment's tracking numbers.
	 */
	@LiquidObject.property() get trackingNumbers() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The URL for the fulfillment's tracking number.
	 */
	@LiquidObject.property() get trackingUrl() {
		return new DataType(Primitive.string);
	}
}

export const fulfillment = new Fulfillment();
