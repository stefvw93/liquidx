import { LineItem } from "@/objects/line-item";
import { LiquidObject } from "@/util/object";

/**
 * Information about the parent relationship for a nested cart line item.

*/
export class ParentRelationship extends LiquidObject {
	/**
	 * The parent line item for the nested cart line item.
	 */
	@LiquidObject.property() get parent() {
		return new LineItem();
	}
}

export const parentRelationship = new ParentRelationship();
