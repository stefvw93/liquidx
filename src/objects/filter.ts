import { FilterValue } from "@/objects/filter-value";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A [storefront filter](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

*/
export class Filter extends LiquidObject {
	/**
	 * The values of the filter that are currently active.
	 *
	 * The array can have values only for `boolean` and `list` type filters.
	 */
	@LiquidObject.property() get activeValues() {
		return new LiquidArray(() => new FilterValue());
	}

	/**
	 * The `false` filter value.
	 *
	 * Returns a value for `boolean` type filters if the unfiltered view has at least one result with the `false` filter value. Otherwise, it returns `nil`.
	 */
	@LiquidObject.property() get falseValue() {
		return new FilterValue();
	}

	/**
	 * The values of the filter that are currently inactive.
	 */
	@LiquidObject.property() get inactiveValues() {
		return new LiquidArray(() => new FilterValue());
	}

	/**
	 * The customer-facing label for the filter.
	 */
	@LiquidObject.property() get label() {
		return new DataType(Primitive.string);
	}

	/**
	 * The highest filter value.
	 *
	 * Returns a value only for `price_range` type filters. Returns `nil` for other types.
	 */
	@LiquidObject.property() get maxValue() {
		return new FilterValue();
	}

	/**
	 * The lowest filter value.
	 *
	 * Returns a value only for `price_range` type filters. Returns `nil` for other types.
	 */
	@LiquidObject.property() get minValue() {
		return new FilterValue();
	}

	/**
	 * The logical operator used by the filter. Returns a value only for `boolean` and `list` type filters. Returns `nil` for other types.
	 */
	@LiquidObject.property() get operator() {
		return new DataType(Primitive.string);
	}

	/**
	 * The URL parameter for the filter. For example, `filter.v.option.color`.
	 */
	@LiquidObject.property() get paramName() {
		return new DataType(Primitive.string);
	}

	/**
	 * Describes how to present the filter values.
	 *
	 * Returns a value only for `list` type filters. Returns `nil` for other types.
	 */
	@LiquidObject.property() get presentation() {
		return new DataType(Primitive.string);
	}

	/**
	 * The highest product price within the collection or search results.
	 *
	 * Returns a value only for `price_range` type filters. Returns `nil` for other types.
	 */
	@LiquidObject.property() get rangeMax() {
		return new DataType(Primitive.number);
	}

	/**
	 * The `true` filter value.
	 *
	 * Returns a value for `boolean` type filters if the unfiltered view has at least one result with the `true` filter value. Otherwise, it returns `nil`.
	 */
	@LiquidObject.property() get trueValue() {
		return new FilterValue();
	}

	/**
	 * The type of the filter.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The current page URL with the URL parameter related to the filter removed.
	 */
	@LiquidObject.property() get urlToRemove() {
		return new DataType(Primitive.string);
	}

	/**
	 * The values of the filter.
	 *
	 * The array can have values only for `boolean` and `list` type filters.
	 */
	@LiquidObject.property() get values() {
		return new LiquidArray(() => new FilterValue());
	}
}

export const filter = new Filter();
