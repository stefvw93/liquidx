import { SellingPlan } from "@/objects/selling-plan";
import { SellingPlanAllocationPriceAdjustment } from "@/objects/selling-plan-allocation-price-adjustment";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about how a specific [selling plan](https://shopify.dev/apps/subscriptions/selling-plans) affects a line item.

*/
export class SellingPlanAllocation extends LiquidObject {
	/**
	 * The amount that the customer will be charged at checkout in the currency's subunit.
	 */
	@LiquidObject.property() get checkoutChargeAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The **compare at** price of the selling plan allocation in the currency's subunit.
	 */
	@LiquidObject.property() get compareAtPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price for each delivery in the selling plan in the currency's subunit.
	 */
	@LiquidObject.property() get perDeliveryPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price of the selling plan allocation in the currency's subunit.
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}

	/**
	 * The selling plan allocation price adjustments.
	 */
	@LiquidObject.property() get priceAdjustments() {
		return new LiquidArray(() => new SellingPlanAllocationPriceAdjustment());
	}

	/**
	 * The remaining amount for the customer to pay, in the currency's subunit.
	 */
	@LiquidObject.property() get remainingBalanceChargeAmount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The selling plan that created the allocation.
	 */
	@LiquidObject.property() get sellingPlan() {
		return new SellingPlan();
	}

	/**
	 * The ID of the [`selling_plan_group`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group) that the selling plan of the allocation belongs to.
	 */
	@LiquidObject.property() get sellingPlanGroupId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [unit price](https://shopify.dev/docs/api/liquid/objects/variant#variant-unit_price) of the variant associated with the selling plan, in the currency's subunit.
	 */
	@LiquidObject.property() get unitPrice() {
		return new DataType(Primitive.number);
	}
}

export const sellingPlanAllocation = new SellingPlanAllocation();
