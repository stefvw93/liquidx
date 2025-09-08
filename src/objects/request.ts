import { ShopLocale } from "@/objects/shop-locale";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about the current URL and the associated page.

*/
export class Request extends LiquidObject {
	/**
	 * Returns `true` if the request is being made from within the theme editor. Returns `false` if not.
	 */
	@LiquidObject.property() get designMode() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The domain that the request is hosted on.
	 */
	@LiquidObject.property() get host() {
		return new DataType(Primitive.string);
	}

	/**
	 * The locale of the request.
	 */
	@LiquidObject.property() get locale() {
		return new ShopLocale();
	}

	/**
	 * The protocol and host of the request.
	 */
	@LiquidObject.property() get origin() {
		return new DataType(Primitive.string);
	}

	/**
	 * The type of page being requested.
	 */
	@LiquidObject.property() get pageType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The path of the request.
	 */
	@LiquidObject.property() get path() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the request is being made from within the theme editor's visual section preview. Returns `false` if not.
	 */
	@LiquidObject.property() get visualPreviewMode() {
		return new DataType(Primitive.boolean);
	}
}

export const request = new Request();
