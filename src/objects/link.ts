import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A link in a [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus).

*/
export class Link extends LiquidObject {
	/**
	 * Returns `true` if the link is active. Returns `false` if not.
	 */
	@LiquidObject.property() get active() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if a link's child link is active. Returns `false` if not.
	 */
	@LiquidObject.property() get childActive() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if current URL path matches a link's child link [URL](https://shopify.dev/docs/api/liquid/objects/link#link-url). Returns `false` if not.
	 */
	@LiquidObject.property() get childCurrent() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the current URL path matches the [URL](https://shopify.dev/docs/api/liquid/objects/link#link-url) of the link. Returns `false` if not.
	 */
	@LiquidObject.property() get current() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the link.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The number of nested levels under the link.
	 */
	@LiquidObject.property() get levels() {
		return new DataType(Primitive.number);
	}

	/**
	 * The child links of the link.
	 */
	@LiquidObject.property() get links() {
		return new LiquidArray(() => new Link());
	}

	/**
	 * The object associated with the link.
	 */
	@LiquidObject.property() get object() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The title of the link.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The type of the link.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL of the link.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const link = new Link();
