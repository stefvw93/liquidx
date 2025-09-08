import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

export class Discount extends LiquidObject {
	/**
	 * The amount of the discount in the currency's subunit.
	 */
	@LiquidObject.property() amount = new DataType(Primitive.number);

	/**
	 * The customer-facing name of the discount.
	 */
	@LiquidObject.property() code = new DataType(Primitive.string);

	/**
	 * The amount of the discount as a negative value, in the currency's subunit.
	 */
	@LiquidObject.property() savings = new DataType(Primitive.number);

	/**
	 * The customer-facing name of the discount.
	 */
	@LiquidObject.property() title = new DataType(Primitive.string);

	/**
	 * The amount of the discount in the currency's subunit.
	 */
	@LiquidObject.property() totalAmount = new DataType(Primitive.number);

	/**
	 * The amount of the discount as a negative value, in the currency's subunit.
	 */
	@LiquidObject.property() totalSavings = new DataType(Primitive.number);

	/**
	 * The type of the discount.
	 */
	@LiquidObject.property() type = new DataType(Primitive.string);
}

export const discount = new Discount();
