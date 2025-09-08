import { Product } from "@/objects/product";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Product recommendations for a specific product based on sales data, product descriptions, and collection relationships.

*/
export class Recommendations extends LiquidObject {
	/**
	 * The recommendation intent.
	 */
	@LiquidObject.property() get intent() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` when being referenced inside a section that's been rendered using the Product Recommendations API and the Section Rendering API. Returns `false` if not.
	 */
	@LiquidObject.property() get "performed?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The recommended products.
	 */
	@LiquidObject.property() get products() {
		return new LiquidArray(() => new Product());
	}

	/**
	 * The number of recommended products.
	 */
	@LiquidObject.property() get productsCount() {
		return new DataType(Primitive.number);
	}
}

export const recommendations = new Recommendations();
