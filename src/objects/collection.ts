import { Filter } from "@/objects/filter";
import { Image } from "@/objects/image";
import { Metafield } from "@/objects/metafield";
import { Product } from "@/objects/product";
import { SortOption } from "@/objects/sort-option";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A [collection](https://help.shopify.com/manual/products/collections) in a store.

*/
export class Collection extends LiquidObject {
	/**
	 * The total number of products in a collection.
	 */
	@LiquidObject.property() get allProductsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * All of the tags applied to the products in the collection.
	 */
	@LiquidObject.property() get allTags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * All of the product types in a collection.
	 */
	@LiquidObject.property() get allTypes() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * All of the product vendors in a collection.
	 */
	@LiquidObject.property() get allVendors() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The product type on a product type collection page.
	 */
	@LiquidObject.property() get currentType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The vendor name on a vendor collection page.
	 */
	@LiquidObject.property() get currentVendor() {
		return new DataType(Primitive.string);
	}

	/**
	 * The default sort order of the collection.
	 */
	@LiquidObject.property() get defaultSortBy() {
		return new DataType(Primitive.string);
	}

	/**
	 * The description of the collection.
	 */
	@LiquidObject.property() get description() {
		return new DataType(Primitive.string);
	}

	/**
	 * The featured image for the collection.
	 */
	@LiquidObject.property() get featuredImage() {
		return new Image();
	}

	/**
	 * The [storefront filters](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters) that have been set up on the collection.
	 */
	@LiquidObject.property() get filters() {
		return new LiquidArray(() => new Filter());
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the collection.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the collection.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The image for the collection.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the collection.
	 */
	@LiquidObject.property() get metafields() {
		return new LiquidArray(() => new Metafield());
	}

	/**
	 * The next product in the collection. Returns `nil` if there's no next product.
	 */
	@LiquidObject.property() get nextProduct() {
		return new Product();
	}

	/**
	 * The previous product in the collection. Returns `nil` if there's no previous product.
	 */
	@LiquidObject.property() get previousProduct() {
		return new Product();
	}

	/**
	 * All of the products in the collection.
	 */
	@LiquidObject.property() get products() {
		return new LiquidArray(() => new Product());
	}

	/**
	 * The total number of products in the current view of the collection.
	 */
	@LiquidObject.property() get productsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * A timestamp for when the collection was published.
	 */
	@LiquidObject.property() get publishedAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The sort order applied to the collection by the `sort_by` URL parameter.
	 */
	@LiquidObject.property() get sortBy() {
		return new DataType(Primitive.string);
	}

	/**
	 * The available sorting options for the collection.
	 */
	@LiquidObject.property() get sortOptions() {
		return new LiquidArray(() => new SortOption());
	}

	/**
	 * The tags that are currently applied to the collection.
	 */
	@LiquidObject.property() get tags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the collection.
	 */
	@LiquidObject.property() get templateSuffix() {
		return new DataType(Primitive.string);
	}

	/**
	 * The title of the collection.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the collection.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}
}

export const collection = new Collection();
