import { Filter } from "@/objects/filter";
import { SortOption } from "@/objects/sort-option";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * Information about a storefront search query.

*/
export class Search extends LiquidObject {
	/**
	 * The default sort order of the search results, which is `relevance`.
	 */
	@LiquidObject.property() get defaultSortBy() {
		return new DataType(Primitive.string);
	}

	/**
	 * The filters that have been set up on the search page.
	 */
	@LiquidObject.property() get filters() {
		return new LiquidArray(() => new Filter());
	}

	/**
	 * Returns `true` if a search was successfully performed. Returns `false` if not.
	 */
	@LiquidObject.property() get performed() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The search result items.
	 * @todo Make it type safe
	 */
	@LiquidObject.property() get results() {
		return new Dictionary(() => new Dictionary(() => new Unknown()));
	}

	/**
	 * The number of results.
	 */
	@LiquidObject.property() get resultsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The sort order of the search results. This is determined by the `sort_by` URL parameter.
	 */
	@LiquidObject.property() get sortBy() {
		return new DataType(Primitive.string);
	}

	/**
	 * The available sorting options for the search results.
	 */
	@LiquidObject.property() get sortOptions() {
		return new LiquidArray(() => new SortOption());
	}

	/**
	 * The entered search terms.
	 */
	@LiquidObject.property() get terms() {
		return new DataType(Primitive.string);
	}

	/**
	 * The object types that the search was performed on.
	 */
	@LiquidObject.property() get types() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}
}

export const search = new Search();
