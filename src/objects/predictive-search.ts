import { PredictiveSearchResources } from "@/objects/predictive-search-resources";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about the results from a predictive search query through the [Predictive Search API](https://shopify.dev/api/ajax/reference/predictive-search#get-locale-search-suggest).

*/
export class PredictiveSearch extends LiquidObject {
	/**
	 * Returns `true` when being referenced inside a section that's been rendered using the Predictive Search API and the Section Rendering API. Returns `false` if not.
	 */
	@LiquidObject.property() get performed() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The resources associated with the query.
	 */
	@LiquidObject.property() get resources() {
		return new PredictiveSearchResources();
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

export const predictiveSearch = new PredictiveSearch();
