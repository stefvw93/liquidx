import { Part } from "@/objects/part";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * Information about the pagination inside a set of [`paginate` tags](https://shopify.dev/docs/api/liquid/tags/paginate).

*/
export class Paginate extends LiquidObject {
	/**
	 * The total number of items on pages previous to the current page.
	 */
	@LiquidObject.property() get currentOffset() {
		return new DataType(Primitive.number);
	}

	/**
	 * The page number of the current page.
	 */
	@LiquidObject.property() get currentPage() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total number of items to be paginated.
	 */
	@LiquidObject.property() get items() {
		return new DataType(Primitive.number);
	}

	/**
	 * The pagination part to go to the next page.
	 */
	@LiquidObject.property() get next() {
		return new Part();
	}

	/**
	 * The URL parameter denoting the pagination.
	 */
	@LiquidObject.property() get pageParam() {
		return new DataType(Primitive.string);
	}

	/**
	 * The number of items displayed per page.
	 */
	@LiquidObject.property() get pageSize() {
		return new DataType(Primitive.number);
	}

	/**
	 * The total number of pages.
	 */
	@LiquidObject.property() get pages() {
		return new DataType(Primitive.number);
	}

	/**
	 * The pagination parts.
	 */
	@LiquidObject.property() get parts() {
		return new LiquidArray(() => new Part());
	}

	/**
	 * The pagination part to go to the previous page.
	 */
	@LiquidObject.property() get previous() {
		return new Part();
	}
}

export const paginate = new Paginate();
