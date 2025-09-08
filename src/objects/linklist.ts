import { Link } from "@/objects/link";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.

*/
export class Linklist extends LiquidObject {
	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the menu.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The number of nested levels in the menu.
	 */
	@LiquidObject.property() get levels() {
		return new DataType(Primitive.number);
	}

	/**
	 * The links in the menu.
	 */
	@LiquidObject.property() get links() {
		return new LiquidArray(() => new Link());
	}

	/**
	 * The title of the menu.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}
}

export const linklist = new Linklist();
