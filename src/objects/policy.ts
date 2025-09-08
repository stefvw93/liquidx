import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A [store policy](https://help.shopify.com/manual/checkout-settings/refund-privacy-tos), such as a privacy or return policy.

*/
export class Policy extends LiquidObject {
	/**
	 * The content of the policy.
	 */
	@LiquidObject.property() get body() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the policy.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The title of the policy.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the policy.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const policy = new Policy();
