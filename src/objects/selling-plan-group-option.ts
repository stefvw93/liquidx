import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about a specific option in a [selling plan group](https://shopify.dev/docs/api/liquid/objects/selling_plan_group).

*/
export class SellingPlanGroupOption extends LiquidObject {
	/**
	 * The name of the option.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The 1-based index of the option in the [`selling_plan_group.options` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).
	 */
	@LiquidObject.property() get position() {
		return new DataType(Primitive.number);
	}

	/**
	 * The option value of the currently selected selling plan.
	 */
	@LiquidObject.property() get selectedValue() {
		return new DataType(Primitive.string);
	}

	/**
	 * The values of the option.
	 */
	@LiquidObject.property() get values() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}
}

export const sellingPlanGroupOption = new SellingPlanGroupOption();
