import { Article } from "@/objects/article";
import { Collection } from "@/objects/collection";
import { Page } from "@/objects/page";
import { Product } from "@/objects/product";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Contains arrays of objects for each resource type that can be returned by a [predictive search query](https://shopify.dev/api/ajax/reference/predictive-search#get-locale-search-suggest).

*/
export class PredictiveSearchResources extends LiquidObject {
	/**
	 * The articles associated with the query.
	 */
	@LiquidObject.property() get articles() {
		return new LiquidArray(() => new Article());
	}

	/**
	 * The collections associated with the query.
	 */
	@LiquidObject.property() get collections() {
		return new LiquidArray(() => new Collection());
	}

	/**
	 * The pages associated with the query.
	 */
	@LiquidObject.property() get pages() {
		return new LiquidArray(() => new Page());
	}

	/**
	 * The products associated with the query.
	 */
	@LiquidObject.property() get products() {
		return new LiquidArray(() => new Product());
	}
}

export const predictiveSearchResources = new PredictiveSearchResources();
