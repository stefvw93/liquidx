import { Collection } from "@/objects/collection";
import { Image } from "@/objects/image";
import { Media } from "@/objects/media";
import { Metafield } from "@/objects/metafield";
import { ProductOption } from "@/objects/product-option";
import { SellingPlan } from "@/objects/selling-plan";
import { SellingPlanAllocation } from "@/objects/selling-plan-allocation";
import { SellingPlanGroup } from "@/objects/selling-plan-group";
import { TaxonomyCategory } from "@/objects/taxonomy-category";
import { Variant } from "@/objects/variant";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A [product](https://help.shopify.com/manual/products) in the store.

*/
export class Product extends LiquidObject {
	/**
	 * Returns `true` if at least one of the variants of the product is available. Returns `false` if not.
	 */
	@LiquidObject.property() get available() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The taxonomy category for the product
	 */
	@LiquidObject.property() get category() {
		return new TaxonomyCategory();
	}

	/**
	 * The collections that the product belongs to.
	 */
	@LiquidObject.property() get collections() {
		return new LiquidArray(() => new Collection());
	}

	/**
	 * The lowest **compare at** price of any variants of the product in the currency's subunit.
	 */
	@LiquidObject.property() get compareAtPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The highest **compare at** price of any variants of the product in the currency's subunit.
	 */
	@LiquidObject.property() get compareAtPriceMax() {
		return new DataType(Primitive.number);
	}

	/**
	 * The lowest **compare at** price of any variants of the product in the currency's subunit. This is the same as `product.compare_at_price`.
	 */
	@LiquidObject.property() get compareAtPriceMin() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the variant **compare at** prices of the product vary. Returns `false` if not.
	 */
	@LiquidObject.property() get compareAtPriceVaries() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The description of the product.
	 */
	@LiquidObject.property() get content() {
		return new DataType(Primitive.string);
	}

	/**
	 * A timestamp for when the product was created.
	 */
	@LiquidObject.property() get createdAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * The description of the product.
	 */
	@LiquidObject.property() get description() {
		return new DataType(Primitive.string);
	}

	/**
	 * The first (featured) image attached to the product.
	 */
	@LiquidObject.property() get featuredImage() {
		return new Image();
	}

	/**
	 * The first (featured) media attached to the product.
	 */
	@LiquidObject.property() get featuredMedia() {
		return new Media();
	}

	/**
	 * The first available variant of the product.
	 */
	@LiquidObject.property() get firstAvailableVariant() {
		return new Variant();
	}

	/**
	 * Returns `true` if the product is a gift card. Returns `false` if not.
	 */
	@LiquidObject.property() get "giftCard?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the product.
	 */
	@LiquidObject.property() get handle() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the product doesn't have any options. Returns `false` if not.
	 */
	@LiquidObject.property() get hasOnlyDefaultVariant() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The ID of the product.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The images attached to the product.
	 */
	@LiquidObject.property() get images() {
		return new LiquidArray(() => new Image());
	}

	/**
	 * The media attached to the product, sorted by the date it was added to the product.
	 */
	@LiquidObject.property() get media() {
		return new LiquidArray(() => new Media());
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the product.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * The option names of the product.
	 */
	@LiquidObject.property() get options() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * Allows you to access a specific [product option](https://shopify.dev/docs/api/liquid/objects/product_option) by its name.
	 */
	@LiquidObject.property() get optionsByName() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The options on the product.
	 */
	@LiquidObject.property() get optionsWithValues() {
		return new LiquidArray(() => new ProductOption());
	}

	/**
	 * The lowest price of any variants of the product in the currency's subunit.
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}

	/**
	 * The highest price of any variants of the product in the currency's subunit.
	 */
	@LiquidObject.property() get priceMax() {
		return new DataType(Primitive.number);
	}

	/**
	 * The lowest price of any variants of the product in the currency's subunit.
	 */
	@LiquidObject.property() get priceMin() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the product's variant prices vary. Returns `false` if not.
	 */
	@LiquidObject.property() get priceVaries() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * A timestamp for when the product was published.
	 */
	@LiquidObject.property() get publishedAt() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the product has at least one variant with quantity price breaks in the current customer context. Returns `false` if not.
	 */
	@LiquidObject.property() get "quantityPriceBreaksConfigured?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if all of the variants of the product require a selling plan. Returns `false` if not.
	 */
	@LiquidObject.property() get requiresSellingPlan() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The currently selected, or first available, selling plan allocation.
	 */
	@LiquidObject.property() get selectedOrFirstAvailableSellingPlanAllocation() {
		return new SellingPlanAllocation();
	}

	/**
	 * The currently selected or first available variant of the product.
	 */
	@LiquidObject.property() get selectedOrFirstAvailableVariant() {
		return new Variant();
	}

	/**
	 * The currently selected selling plan.
	 */
	@LiquidObject.property() get selectedSellingPlan() {
		return new SellingPlan();
	}

	/**
	 * The currently selected selling plan allocation for the currently selected variant.
	 */
	@LiquidObject.property() get selectedSellingPlanAllocation() {
		return new SellingPlanAllocation();
	}

	/**
	 * The currently selected variant of the product.
	 */
	@LiquidObject.property() get selectedVariant() {
		return new Variant();
	}

	/**
	 * The selling plan groups that the variants of the product are included in.
	 */
	@LiquidObject.property() get sellingPlanGroups() {
		return new LiquidArray(() => new SellingPlanGroup());
	}

	/**
	 * The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) of the product.
	 */
	@LiquidObject.property() get tags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) of the product.
	 */
	@LiquidObject.property() get templateSuffix() {
		return new DataType(Primitive.string);
	}

	/**
	 * The title of the product.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The type of the product.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL of the product.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * The variants of the product.
	 */
	@LiquidObject.property() get variants() {
		return new LiquidArray(() => new Variant());
	}

	/**
	 * The total number of variants for the product.
	 */
	@LiquidObject.property() get variantsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The vendor of the product.
	 */
	@LiquidObject.property() get vendor() {
		return new DataType(Primitive.string);
	}
}

export const product = new Product();
