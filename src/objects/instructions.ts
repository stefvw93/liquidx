import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The instructions for a nested cart line item.

*/
export class Instructions extends LiquidObject {
	/**
	 * Whether the nested cart line item can be removed.
	 */
	@LiquidObject.property() get canRemove() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Whether the nested cart line item quantity can be updated.
	 */
	@LiquidObject.property() get canUpdateQuantity() {
		return new DataType(Primitive.boolean);
	}
}

export const instructions = new Instructions();
