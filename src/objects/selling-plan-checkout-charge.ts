import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about how a specific [selling plan](https://shopify.dev/apps/subscriptions/selling-plans) affects the amount that a customer needs to pay for a line item at checkout.

*/
export class SellingPlanCheckoutCharge extends LiquidObject {
	/**
	 * The value of the checkout charge.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.number);
	}

	/**
	 * The value type of the checkout charge.
	 */
	@LiquidObject.property() get valueType() {
		return new DataType(Primitive.string);
	}
}

export const sellingPlanCheckoutCharge = new SellingPlanCheckoutCharge();
