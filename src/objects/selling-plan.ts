import { SellingPlanCheckoutCharge } from "@/objects/selling-plan-checkout-charge";
import { SellingPlanOption } from "@/objects/selling-plan-option";
import { SellingPlanPriceAdjustment } from "@/objects/selling-plan-price-adjustment";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about the intent of how a specific [selling plan](https://shopify.dev/apps/subscriptions/selling-plans) affects a line item.

*/
export class SellingPlan extends LiquidObject {
	/**
	 * The checkout charge of the selling plan.
	 */
	@LiquidObject.property() get checkoutCharge() {
		return new SellingPlanCheckoutCharge();
	}

	/**
	 * The description of the selling plan.
	 */
	@LiquidObject.property() get description() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the [`selling_plan_group`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group) that the selling plan belongs to.
	 */
	@LiquidObject.property() get groupId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the selling plan.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the selling plan.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The selling plan options.
	 */
	@LiquidObject.property() get options() {
		return new LiquidArray(() => new SellingPlanOption());
	}

	/**
	 * The selling plan price adjustments.
	 */
	@LiquidObject.property() get priceAdjustments() {
		return new LiquidArray(() => new SellingPlanPriceAdjustment());
	}

	/**
	 * Returns `true` if the selling plan includes multiple deliveries. Returns `false` if not.
	 */
	@LiquidObject.property() get recurringDeliveries() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the selling plan is currently selected. Returns `false` if not.
	 */
	@LiquidObject.property() get selected() {
		return new DataType(Primitive.boolean);
	}
}

export const sellingPlan = new SellingPlan();
