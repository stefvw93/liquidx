import { Image } from "@/objects/image";
import { Media } from "@/objects/media";
import { Metafield } from "@/objects/metafield";
import { Product } from "@/objects/product";
import { ProductOptionValue } from "@/objects/product-option-value";
import { QuantityPriceBreak } from "@/objects/quantity-price-break";
import { QuantityRule } from "@/objects/quantity-rule";
import { SellingPlanAllocation } from "@/objects/selling-plan-allocation";
import { StoreAvailability } from "@/objects/store-availability";
import { UnitPriceMeasurement } from "@/objects/unit-price-measurement";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A [product variant](https://help.shopify.com/manual/products/variants).

*/
export class Variant extends LiquidObject {
	/**
	 * Returns `true` if the variant is available. Returns `false` if not.
	 */
	@LiquidObject.property() get available() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The barcode of the variant.
	 */
	@LiquidObject.property() get barcode() {
		return new DataType(Primitive.string);
	}

	/**
	 * The **compare at** price of the variant in the currency's subunit.
	 */
	@LiquidObject.property() get compareAtPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The image attached to the variant.
	 */
	@LiquidObject.property() get featuredImage() {
		return new Image();
	}

	/**
	 * The first media object attached to the variant.
	 */
	@LiquidObject.property() get featuredMedia() {
		return new Media();
	}

	/**
	 * The ID of the variant.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The image attached to the variant.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}

	/**
	 * Returns `true` if the variant has incoming inventory. Returns `false` if not.
	 */
	@LiquidObject.property() get incoming() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The inventory management service of the variant.
	 */
	@LiquidObject.property() get inventoryManagement() {
		return new DataType(Primitive.string);
	}

	/**
	 * Whether the variant should continue to be sold when it's out of stock.
	 */
	@LiquidObject.property() get inventoryPolicy() {
		return new DataType(Primitive.string);
	}

	/**
	 * The inventory quantity of the variant.
	 */
	@LiquidObject.property() get inventoryQuantity() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the variant has been matched by a [storefront filter](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering) or no filters are applied. Returns `false` if it hasn't.
	 */
	@LiquidObject.property() get matched() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the variant.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * The arrival date for the next incoming inventory of the variant.
	 */
	@LiquidObject.property() get nextIncomingDate() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the variant for the first product option.
	 * @deprecated Deprecated
	 *
	 * Deprecated. Prefer to use [`variant.options`](https://shopify.dev/docs/api/liquid/objects/variant#variant-options) instead.
	 */
	@LiquidObject.property() get option1() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the variant for the second product option.
	 * @deprecated Deprecated
	 *
	 * Deprecated. Prefer to use [`variant.options`](https://shopify.dev/docs/api/liquid/objects/variant#variant-options) instead.
	 */
	@LiquidObject.property() get option2() {
		return new DataType(Primitive.string);
	}

	/**
	 * The value of the variant for the third product option.
	 * @deprecated Deprecated
	 *
	 * Deprecated. Prefer to use [`variant.options`](https://shopify.dev/docs/api/liquid/objects/variant#variant-options) instead.
	 */
	@LiquidObject.property() get option3() {
		return new DataType(Primitive.string);
	}

	/**
	 * The values of the variant for each [product option](https://shopify.dev/docs/api/liquid/objects/product_option).
	 */
	@LiquidObject.property() get options() {
		return new ProductOptionValue();
	}

	/**
	 * The price of the variant in the currency's subunit.
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}

	/**
	 * The parent product of the variant.
	 */
	@LiquidObject.property() get product() {
		return new Product();
	}

	/**
	 * Returns `quantity_price_break` objects for the variant in the current customer context.
	 */
	@LiquidObject.property() get quantityPriceBreaks() {
		return new LiquidArray(() => new QuantityPriceBreak());
	}

	/**
	 * Returns `true` if the variant has any quantity price breaks available in the current customer context. Returns `false` if it doesn't.
	 */
	@LiquidObject.property() get "quantityPriceBreaksConfigured?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The quantity rule for the variant.
	 */
	@LiquidObject.property() get quantityRule() {
		return new QuantityRule();
	}

	/**
	 * Returns `true` if the variant's product is set to require a `selling_plan` when being added to the cart. Returns `false` if not.
	 */
	@LiquidObject.property() get requiresSellingPlan() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the variant requires shipping. Returns `false` if it doesn't.
	 */
	@LiquidObject.property() get requiresShipping() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if the variant is currently selected. Returns `false` if it's not.
	 */
	@LiquidObject.property() get selected() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The selected `selling_plan_allocation`.
	 */
	@LiquidObject.property() get selectedSellingPlanAllocation() {
		return new SellingPlanAllocation();
	}

	/**
	 * The `selling_plan_allocation` objects for the variant.
	 */
	@LiquidObject.property() get sellingPlanAllocations() {
		return new LiquidArray(() => new SellingPlanAllocation());
	}

	/**
	 * The SKU of the variant.
	 */
	@LiquidObject.property() get sku() {
		return new DataType(Primitive.string);
	}

	/**
	 * The store availabilities for the variant.
	 */
	@LiquidObject.property() get storeAvailabilities() {
		return new LiquidArray(() => new StoreAvailability());
	}

	/**
	 * Returns `true` if taxes should be charged on the variant. Returns `false` if not.
	 */
	@LiquidObject.property() get taxable() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * A concatenation of each variant option, separated by a `/`.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The [unit price](https://help.shopify.com/manual/products/details/product-pricing/unit-pricing#add-unit-prices-to-your-product) of the variant in the currency's subunit.
	 */
	@LiquidObject.property() get unitPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The unit price measurement of the variant.
	 */
	@LiquidObject.property() get unitPriceMeasurement() {
		return new UnitPriceMeasurement();
	}

	/**
	 * The URL of the variant.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * The weight of the variant in grams.
	 */
	@LiquidObject.property() get weight() {
		return new DataType(Primitive.number);
	}

	/**
	 * The weight of the variant in the unit specified by `variant.weight_unit`.
	 */
	@LiquidObject.property() get weightInUnit() {
		return new DataType(Primitive.number);
	}

	/**
	 * The unit for the weight of the variant.
	 */
	@LiquidObject.property() get weightUnit() {
		return new DataType(Primitive.string);
	}
}

export const variant = new Variant();
