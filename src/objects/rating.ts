import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information for a [`rating` type](https://shopify.dev/apps/metafields/types) metafield.

*/
export class Rating extends LiquidObject {
	/**
	 * The rating value.
	 */
	@LiquidObject.property() get rating() {
		return new DataType(Primitive.number);
	}

	/**
	 * The maximum value of the rating scale.
	 */
	@LiquidObject.property() get scaleMax() {
		return new DataType(Primitive.number);
	}

	/**
	 * The minimum value of the rating scale.
	 */
	@LiquidObject.property() get scaleMin() {
		return new DataType(Primitive.number);
	}
}

export const rating = new Rating();
