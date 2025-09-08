import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about how units of a product variant are measured. It's used to calculate [unit prices](https://help.shopify.com/manual/products/details/product-pricing/unit-pricing#add-unit-prices-to-your-product).

*/
export class UnitPriceMeasurement extends LiquidObject {
	/**
	 * The type of unit measurement.
	 */
	@LiquidObject.property() get measuredType() {
		return new DataType(Primitive.string);
	}

	/**
	 * The unit of measurement used to measure the [`quantity_value`](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-quantity_value).
	 */
	@LiquidObject.property() get quantityUnit() {
		return new DataType(Primitive.string);
	}

	/**
	 * The quantity of the unit.
	 */
	@LiquidObject.property() get quantityValue() {
		return new DataType(Primitive.number);
	}

	/**
	 * The unit of measurement used to measure the [`reference_value`](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-reference_value).
	 */
	@LiquidObject.property() get referenceUnit() {
		return new DataType(Primitive.string);
	}

	/**
	 * The quantity of the unit for the base unit price.
	 */
	@LiquidObject.property() get referenceValue() {
		return new DataType(Primitive.number);
	}
}

export const unitPriceMeasurement = new UnitPriceMeasurement();
