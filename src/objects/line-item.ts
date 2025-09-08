import { Discount } from "@/objects/discount";
import { DiscountAllocation } from "@/objects/discount-allocation";
import { Fulfillment } from "@/objects/fulfillment";
import { Image } from "@/objects/image";
import { Instructions } from "@/objects/instructions";
import { ParentRelationship } from "@/objects/parent-relationship";
import { Product } from "@/objects/product";
import { SellingPlanAllocation } from "@/objects/selling-plan-allocation";
import { TaxLine } from "@/objects/tax-line";
import { UnitPriceMeasurement } from "@/objects/unit-price-measurement";
import { Variant } from "@/objects/variant";
import { DataType, Primitive } from "@/util/data";
import { Dictionary, LiquidArray } from "@/util/dictionary";
import { NameAndValue } from "@/util/name-and-value";
import { LiquidObject } from "@/util/object";
import { Unknown } from "@/util/unknown";

/**
 * A line in a cart, checkout, or order. Each line item represents a product variant.

*/
export class LineItem extends LiquidObject {
	/**
	 * The discount allocations that apply to the line item.
	 */
	@LiquidObject.property() get discountAllocations() {
		return new LiquidArray(() => new DiscountAllocation());
	}

	/**
	 * The discounts applied to the line item.
	 * @deprecated Deprecated
	 *
	 * Deprecated because not all discount types and details are available.
	 *
	 * The `line_item.discounts` property has been replaced by [`line_item.discount_allocations`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-discount_allocations).
	 */
	@LiquidObject.property() get discounts() {
		return new LiquidArray(() => new Discount());
	}

	/**
	 * An informational error message about the status of the line item in the buyer's chosen language.
	 */
	@LiquidObject.property() get errorMessage() {
		return new DataType(Primitive.string);
	}

	/**
	 * The combined price, in the currency's subunit, of all of the items in the line item. This includes any line-level discounts.
	 */
	@LiquidObject.property() get finalLinePrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price of the line item in the currency's subunit. This includes any line-level discounts.
	 */
	@LiquidObject.property() get finalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The fulfillment of the line item.
	 */
	@LiquidObject.property() get fulfillment() {
		return new Fulfillment();
	}

	/**
	 * The [fulfillment service](https://help.shopify.com/manual/shipping/understanding-shipping/dropshipping-and-fulfillment-services) for the vartiant associated with the line item. If there's no fulfillment service, then `manual` is returned.
	 */
	@LiquidObject.property() get fulfillmentService() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the product associated with the line item is a gift card. Returns `false` if not.
	 */
	@LiquidObject.property() get giftCard() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The weight of the line item in the store's [default weight unit](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-stores-default-weight-unit).
	 */
	@LiquidObject.property() get grams() {
		return new DataType(Primitive.number);
	}

	/**
	 * The ID of the line item.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The image of the line item.
	 */
	@LiquidObject.property() get image() {
		return new Image();
	}

	/**
	 * Instructions define behaviours and operations that can be performed on the nested cart line.
	 */
	@LiquidObject.property() get instructions() {
		return new Instructions();
	}

	/**
	 * The components of a line item.
	 */
	@LiquidObject.property() get itemComponents() {
		return new LiquidArray(() => new LineItem());
	}

	/**
	 * The key of the line item.
	 */
	@LiquidObject.property() get key() {
		return new DataType(Primitive.string);
	}

	/**
	 * The discount allocations that apply directly to the line item.
	 */
	@LiquidObject.property() get lineLevelDiscountAllocations() {
		return new LiquidArray(() => new DiscountAllocation());
	}

	/**
	 * The total amount of any discounts applied to the line item in the currency's subunit.
	 */
	@LiquidObject.property() get lineLevelTotalDiscount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The combined price, in the currency's subunit, of all of the items in a line item. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).
	 * @deprecated Deprecated
	 *
	 * Deprecated because discounts from automatic discounts and discount codes aren't included.
	 *
	 * The `line_item.line_price` property has been replaced by [`line_item.final_line_price`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-final_line_price).
	 */
	@LiquidObject.property() get linePrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * Information about the discounts that have affected the line item.
	 */
	@LiquidObject.property() get message() {
		return new DataType(Primitive.string);
	}

	/**
	 * The name and value pairs for each option of the variant associated with the line item.
	 */
	@LiquidObject.property() get optionsWithValues() {
		return new LiquidArray(() => new NameAndValue());
	}

	/**
	 * The combined price of all of the items in a line item in the currency's subunit, before any discounts have been applied.
	 */
	@LiquidObject.property() get originalLinePrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The price of the line item in the currency's subunit, before discounts have been applied.
	 */
	@LiquidObject.property() get originalPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The parent relationship for a nested line item.
	 */
	@LiquidObject.property() get parentRelationship() {
		return new ParentRelationship();
	}

	/**
	 * The price of the line item in the currency's subunit. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).
	 * @deprecated Deprecated
	 *
	 * Deprecated because discounts from automatic discounts and discount codes aren't included.
	 *
	 * The `line_item.price` property has been replaced by [`line_item.final_price`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-final_price).
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}

	/**
	 * The product associated with the line item.
	 */
	@LiquidObject.property() get product() {
		return new Product();
	}

	/**
	 * The [ID](https://shopify.dev/docs/api/liquid/objects/product#product-id) of the line item's product.
	 */
	@LiquidObject.property() get productId() {
		return new DataType(Primitive.number);
	}

	/**
	 * The properties of the line item.
	 */
	@LiquidObject.property() get properties() {
		return new Dictionary(() => new Unknown());
	}

	/**
	 * The quantity of the line item.
	 */
	@LiquidObject.property() get quantity() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the variant associated with the line item requires shipping. Returns `false` if not.
	 */
	@LiquidObject.property() get requiresShipping() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The selling plan allocation of the line item. If the line item doesn't have a selling plan allocation, then `nil` is returned.
	 */
	@LiquidObject.property() get sellingPlanAllocation() {
		return new SellingPlanAllocation();
	}

	/**
	 * The [sku](https://shopify.dev/docs/api/liquid/objects/variant#variant-sku) of the variant associated with the line item.
	 */
	@LiquidObject.property() get sku() {
		return new DataType(Primitive.string);
	}

	/**
	 * The number of items from the line item that have been successfully fulfilled.
	 */
	@LiquidObject.property() get successfullyFulfilledQuantity() {
		return new DataType(Primitive.number);
	}

	/**
	 * The tax lines for the line item.
	 */
	@LiquidObject.property() get taxLines() {
		return new LiquidArray(() => new TaxLine());
	}

	/**
	 * Returns `true` if taxes should be charged on the line item. Returns `false` if not.
	 */
	@LiquidObject.property() get taxable() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The title of the line item. The title is a combination of `line_item.product.title` and `line_item.variant.title`, separated by a hyphen.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}

	/**
	 * The total amount, in the currency's subunit, of any discounts applied to the line item by [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).
	 * @deprecated Deprecated
	 *
	 * Deprecated because discounts from automatic discounts and discount codes aren't included.
	 *
	 * The `line_item.total_discount` property has been replaced by [`line_item.line_level_total_discount`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-line_level_total_discount).
	 */
	@LiquidObject.property() get totalDiscount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [unit price](https://help.shopify.com/manual/products/details/product-pricing/unit-pricing#add-unit-prices-to-your-product) of the line item in the currency's subunit.
	 */
	@LiquidObject.property() get unitPrice() {
		return new DataType(Primitive.number);
	}

	/**
	 * The unit price measurement of the line item.
	 */
	@LiquidObject.property() get unitPriceMeasurement() {
		return new UnitPriceMeasurement();
	}

	/**
	 * The relative URL of the variant associated with the line item.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * A URL to remove the line item from the cart.
	 */
	@LiquidObject.property() get urlToRemove() {
		return new DataType(Primitive.string);
	}

	/**
	 * The variant associated with the line item.
	 */
	@LiquidObject.property() get variant() {
		return new Variant();
	}

	/**
	 * The [ID](https://shopify.dev/docs/api/liquid/objects/variant#variant-id) of the line item's variant.
	 */
	@LiquidObject.property() get variantId() {
		return new DataType(Primitive.number);
	}

	/**
	 * The vendor of the variant associated with the line item.
	 */
	@LiquidObject.property() get vendor() {
		return new DataType(Primitive.string);
	}
}

export const lineItem = new LineItem();
