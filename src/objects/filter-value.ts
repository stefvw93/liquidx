import { FilterValueDisplay } from "@/objects/filter-value-display";
import { Image } from "@/objects/image";
import { Swatch } from "@/objects/swatch";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A specific value of a filter.

*/
export class FilterValue extends LiquidObject {
	/**
	 * Returns `true` if the value is currently active. Returns `false` if not.
	 *
	 * Can only return `true` for filters of type `boolean` or `list`.
	 */
	@LiquidObject.property() get active() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The number of results related to the filter value.
	 *
	 * Returns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.
	 */
	@LiquidObject.property() get count() {
		return new DataType(Primitive.number);
	}

	/**
	 * The visual representation of the filter value.
	 * @deprecated Deprecated
	 *
	 * Deprecated in favor of the [swatch](https://shopify.dev/#swatch) attribute.
	 */
	@LiquidObject.property() get display() {
		return new FilterValueDisplay();
	}

	/**
	 * The visual representation of the filter value when an image is used.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}

	/**
	 * The customer-facing label for the filter value. For example, `Red` or `Rouge`.
	 *
	 * Returns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.
	 */
	@LiquidObject.property() get label() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL parameter for the parent filter of the filter value.
	 */
	@LiquidObject.property() get paramName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The visual representation of the filter value when a swatch is used.
	 */
	@LiquidObject.property() get swatch() {
		return new Swatch();
	}

	/**
	 * The current page URL with the filter value parameter added.
	 */
	@LiquidObject.property() get urlToAdd() {
		return new DataType(Primitive.string);
	}

	/**
	 * The current page URL with the filter value parameter removed.
	 */
	@LiquidObject.property() get urlToRemove() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value for the URL parameter. The `value` is paired with the [`param_name`](https://shopify.dev/#filter_value-param_name) property.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}

export const filterValue = new FilterValue();
