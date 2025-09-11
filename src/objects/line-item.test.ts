import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { lineItem } from "./line-item";

describe("Objects/lineItem", () => {
	test("lineItem properties", () => {
		strictEqual(String(lineItem), "line_item");
		strictEqual(
			String(lineItem.discountAllocations),
			"line_item.discount_allocations",
		);
		strictEqual(String(lineItem.discounts), "line_item.discounts");
		strictEqual(String(lineItem.errorMessage), "line_item.error_message");
		strictEqual(String(lineItem.finalLinePrice), "line_item.final_line_price");
		strictEqual(String(lineItem.finalPrice), "line_item.final_price");
		strictEqual(String(lineItem.fulfillment), "line_item.fulfillment");
		strictEqual(
			String(lineItem.fulfillmentService),
			"line_item.fulfillment_service",
		);
		strictEqual(String(lineItem.giftCard), "line_item.gift_card");
		strictEqual(String(lineItem.grams), "line_item.grams");
		strictEqual(String(lineItem.id), "line_item.id");
		strictEqual(String(lineItem.image), "line_item.image");
		strictEqual(String(lineItem.instructions), "line_item.instructions");
		strictEqual(String(lineItem.itemComponents), "line_item.item_components");
		strictEqual(String(lineItem.key), "line_item.key");
		strictEqual(
			String(lineItem.lineLevelDiscountAllocations),
			"line_item.line_level_discount_allocations",
		);
		strictEqual(
			String(lineItem.lineLevelTotalDiscount),
			"line_item.line_level_total_discount",
		);
		strictEqual(String(lineItem.linePrice), "line_item.line_price");
		strictEqual(String(lineItem.message), "line_item.message");
		strictEqual(
			String(lineItem.optionsWithValues),
			"line_item.options_with_values",
		);
		strictEqual(
			String(lineItem.originalLinePrice),
			"line_item.original_line_price",
		);
		strictEqual(String(lineItem.originalPrice), "line_item.original_price");
		strictEqual(
			String(lineItem.parentRelationship),
			"line_item.parent_relationship",
		);
		strictEqual(String(lineItem.price), "line_item.price");
		strictEqual(String(lineItem.product), "line_item.product");
		strictEqual(String(lineItem.productId), "line_item.product_id");
		strictEqual(String(lineItem.properties), "line_item.properties");
		strictEqual(String(lineItem.quantity), "line_item.quantity");
		strictEqual(
			String(lineItem.requiresShipping),
			"line_item.requires_shipping",
		);
		strictEqual(
			String(lineItem.sellingPlanAllocation),
			"line_item.selling_plan_allocation",
		);
		strictEqual(String(lineItem.sku), "line_item.sku");
		strictEqual(
			String(lineItem.successfullyFulfilledQuantity),
			"line_item.successfully_fulfilled_quantity",
		);
		strictEqual(String(lineItem.taxLines), "line_item.tax_lines");
		strictEqual(String(lineItem.taxable), "line_item.taxable");
		strictEqual(String(lineItem.title), "line_item.title");
		strictEqual(String(lineItem.totalDiscount), "line_item.total_discount");
		strictEqual(String(lineItem.unitPrice), "line_item.unit_price");
		strictEqual(
			String(lineItem.unitPriceMeasurement),
			"line_item.unit_price_measurement",
		);
		strictEqual(String(lineItem.url), "line_item.url");
		strictEqual(String(lineItem.urlToRemove), "line_item.url_to_remove");
		strictEqual(String(lineItem.variant), "line_item.variant");
		strictEqual(String(lineItem.variantId), "line_item.variant_id");
		strictEqual(String(lineItem.vendor), "line_item.vendor");
	});
});
