import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a selling plan's value for a specific [`selling_plan_group_option`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option).

*/
export class SellingPlanOption extends LiquidObject {
	/**
	 * The name of the associated `selling_plan_group_option`.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The 1-based index of the selling plan option in the associated [`selling_plan_group.options` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * The value of the selling plan option.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const sellingPlanOption = new SellingPlanOption();
