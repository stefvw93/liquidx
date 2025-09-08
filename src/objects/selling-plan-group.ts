import { SellingPlan } from "@/objects/selling-plan";
import { SellingPlanGroupOption } from "@/objects/selling-plan-group-option";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about a specific group of [selling plans](https://shopify.dev/apps/subscriptions/selling-plans) that include any of a product's variants.

*/
export class SellingPlanGroup extends LiquidObject {
	/**
	 * An optional string provided by an app to identify selling plan groups created by that app.
	 */
	@LiquidObject.property() get appId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the selling plan group.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the selling plan group.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The selling plan group options.
	 */
	@LiquidObject.property() get options() {
		return new LiquidArray(() => new SellingPlanGroupOption());
	}

	/**
	 * Returns `true` if the currently selected selling plan is part of the selling plan group. Returns `false` if not.
	 */
	@LiquidObject.property() get sellingPlanSelected() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The selling plans in the group.
	 */
	@LiquidObject.property() get sellingPlans() {
		return new LiquidArray(() => new SellingPlan());
	}
}

export const sellingPlanGroup = new SellingPlanGroup();
