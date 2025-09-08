import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A rule for the `robots.txt` file, which tells crawlers which pages can, or can't, be accessed.

*/
export class Rule extends LiquidObject {
	/**
	 * The directive of the rule.
	 */
	@LiquidObject.property() get directive() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the rule.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const rule = new Rule();
