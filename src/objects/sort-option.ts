import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A sort option for a collection or search results page.

*/
export class SortOption extends LiquidObject {
	/**
	 * The customer-facing name of the sort option.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the sort option.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const sortOption = new SortOption();
