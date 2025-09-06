import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * Information about a currency, like the ISO code and symbol.
 */
export class Currency extends LiquidObject {
	/** The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency. */
	@LiquidObject.property() isoCode = new DataType(Primitive.string);

	/** The name of the currency. */
	@LiquidObject.property() name = new DataType(Primitive.string);

	/** The symbol of the currency. */
	@LiquidObject.property() symbol = new DataType(Primitive.string);
}

export const currency = new Currency();
