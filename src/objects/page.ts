import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A [page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages) on a store.

*/
export class Page extends LiquidObject {
	/**
	 * The author of the page.
	 */
	@LiquidObject.property() get author() {
		return new DataType(Primitive.string);
	}

	/**
	 * The content of the page.
	 */
	@LiquidObject.property() get content() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the page.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the page.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the page.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * A timestamp for when the page was published.
	 */
	@LiquidObject.property() get publishedAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the page.
	 */
	@LiquidObject.property() get templateSuffix() {
		return new DataType(Primitive.string);
	}

	/**
	 * The title of the page.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the page.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const page = new Page();
