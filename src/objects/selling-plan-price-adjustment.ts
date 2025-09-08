import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about how a selling plan changes the price of a variant for a given period of time.

*/
export class SellingPlanPriceAdjustment extends LiquidObject {
	/**
	 * The number of orders that the price adjustment applies to.
	 */
	@LiquidObject.property() get orderCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The 1-based index of the price adjustment in the [`selling_plan.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments).
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * The value of the price adjustment as a decimal.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.number);
	}

	/**
	 * The type of price adjustment.
	 */
	@LiquidObject.property() get valueType() {
		return new DataType(Primitive.string);
	}
}

export const sellingPlanPriceAdjustment = new SellingPlanPriceAdjustment();
