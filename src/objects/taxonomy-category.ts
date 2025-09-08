import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * The taxonomy category for a product

*/
export class TaxonomyCategory extends LiquidObject {
	/**
	 * All parent nodes of the current taxonomy category.
	 */
	@LiquidObject.property() get ancestors() {
		return new LiquidArray(() => new TaxonomyCategory());
	}

	/**
	 * The public node ID for the category, formatted as a Shopify GID.
	 */
	@LiquidObject.property() get gid() {
		return new DataType(Primitive.string);
	}

	/**
	 * The public node ID for the category
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.string);
	}

	/**
	 * The localized category name
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}
}

export const taxonomyCategory = new TaxonomyCategory();
