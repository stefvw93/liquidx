import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a tax line of a checkout or order.

*/
export class TaxLine extends LiquidObject {
	/**
	 * The tax amount in the currency's subunit.
	 */
	@LiquidObject.property() get price() {
		return new DataType(Primitive.number);
	}

	/**
	 * The decimal value of the tax rate.
	 */
	@LiquidObject.property() get rate() {
		return new DataType(Primitive.number);
	}

	/**
	 * The decimal value of the tax rate, as a percentage.
	 */
	@LiquidObject.property() get ratePercentage() {
		return new DataType(Primitive.number);
	}

	/**
	 * The title of the tax.
	 */
	@LiquidObject.property() get title() {
		return new DataType(Primitive.string);
	}
}

export const taxLine = new TaxLine();
