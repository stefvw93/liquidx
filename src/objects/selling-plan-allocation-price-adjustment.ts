import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The resulting price from the intent of the associated [`selling_plan_price_adjustment`](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment).

*/
export class SellingPlanAllocationPriceAdjustment extends LiquidObject {
	/**
	 * The 1-based index of the price adjustment in the [`selling_plan_allocation.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments).
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price that will be charged for the price adjustment's lifetime, in the currency's subunit.
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}
}

export const sellingPlanAllocationPriceAdjustment =
	new SellingPlanAllocationPriceAdjustment();
