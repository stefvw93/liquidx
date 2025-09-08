import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A part in the navigation for pagination.

*/
export class Part extends LiquidObject {
	/**
	 * Returns `true` if the part is a link. Returns `false` if not.
	 */
	@LiquidObject.property() get isLink() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The page number associated with the part.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL of the part.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const part = new Part();
