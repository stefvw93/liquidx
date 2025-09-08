import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about the current theme.
 * @deprecated Deprecated because the values of this object's properties are subject to change, so can't be relied on within the theme.
 *
 * If you want to link to the theme editor for the published theme, then you can use the URL path `/admin/themes/current/editor`.
 *
 * While this object is deprecated in Liquid and shouldn't be used, you can still access it through the [REST Admin API](https://shopify.dev/api/admin-rest/current/resources/theme).
 */
export class Theme extends LiquidObject {
	/**
	 * The ID of the theme.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The name of the theme.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The role of the theme.
	 */
	@LiquidObject.property() get role() {
		return new DataType(Primitive.string);
	}
}

export const theme = new Theme();
