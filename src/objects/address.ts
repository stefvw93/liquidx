import { LiquidObject } from "@/util/object";
import { Country } from "./country";
import { DataType, Primitive } from "./data";

/**
 * An address, such as a customer address or order shipping address.
 *
 * **Tip**: Use the [format_address filter](https://shopify.dev/docs/api/liquid/filters/format_address) to output an address according to its locale.
 */
export class Address extends LiquidObject {
	/** The first line of the address. */
	@LiquidObject.property() address1 = new DataType(Primitive.string);

	/** The second line of the address.
	 * If no second line is specified, then `nil` is returned.
	 */
	@LiquidObject.property() address2 = new DataType(Primitive.string);

	/** The city of the address.*/
	@LiquidObject.property() city = new DataType(Primitive.string);

	/**
	 * The company of the address.
	 * If no company is specified, then `nil` is returned.
	 */
	@LiquidObject.property() company = new DataType(Primitive.string);

	/** The country of the address. */
	@LiquidObject.property() country = new Country();

	/** The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html). */
	@LiquidObject.property() countryCode = new DataType(Primitive.string);

	/** The first name of the address. */
	@LiquidObject.property() firstName = new DataType(Primitive.string);

	/** The ID of the address. */
	@LiquidObject.property() id = new DataType(Primitive.number);

	/** The last name of the address. */
	@LiquidObject.property() lastName = new DataType(Primitive.string);

	/** A combination of the first and last names of the address. */
	@LiquidObject.property() name = new DataType(Primitive.string);

	/** The phone number of the address.
	 * If no phone number is specified, then `nil` is returned.
	 */
	@LiquidObject.property() phone = new DataType(Primitive.string);

	/** The province of the address. */
	@LiquidObject.property() province = new DataType(Primitive.string);

	/**
	 * The province of the address in [ISO 3166-2 (alpha 2) format.](https://www.iso.org/glossary-for-iso-3166.html)
	 *
	 * **Note**: The value doesn't include the preceding [ISO 3166-1](https://www.iso.org/glossary-for-iso-3166.html) country code.
	 */
	@LiquidObject.property() provinceCode = new DataType(Primitive.string);

	/** A combination of the first and second lines of the address. */
	@LiquidObject.property() street = new DataType(Primitive.string);

	/**
	 * A summary of the address, including the following properties:
	 * - First and last name
	 * - First and second lines
	 * - City
	 * - Province
	 * - Country
	 */
	@LiquidObject.property() summary = new DataType(Primitive.string);

	/**
	 * The relative URL for the address.
	 *
	 * **Note**: This only applies to customer addresses.
	 */
	@LiquidObject.property() url = new DataType(Primitive.string);

	/** The zip or postal code of the address. */
	@LiquidObject.property() zip = new DataType(Primitive.string);
}

export const address = new Address();
