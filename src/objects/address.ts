import { Country } from "@/objects/country";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * An address, such as a customer address or order shipping address.

*/
export class Address extends LiquidObject {
	/**
	 * The first line of the address.
	 */
	@LiquidObject.property() get address1() {
		return new DataType(Primitive.string);
	}

	/**
	 * The second line of the address.
	 */
	@LiquidObject.property() get address2() {
		return new DataType(Primitive.string);
	}

	/**
	 * The city of the address.
	 */
	@LiquidObject.property() get city() {
		return new DataType(Primitive.string);
	}

	/**
	 * The company of the address.
	 */
	@LiquidObject.property() get company() {
		return new DataType(Primitive.string);
	}

	/**
	 * The country of the address.
	 */
	@LiquidObject.property() get country() {
		return new Country();
	}

	/**
	 * The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
	 */
	@LiquidObject.property() get countryCode() {
		return new DataType(Primitive.string);
	}

	/**
	 * The first name of the address.
	 */
	@LiquidObject.property() get firstName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the address.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The last name of the address.
	 */
	@LiquidObject.property() get lastName() {
		return new DataType(Primitive.string);
	}

	/**
	 * A combination of the first and last names of the address.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The phone number of the address.
	 */
	@LiquidObject.property() get phone() {
		return new DataType(Primitive.string);
	}

	/**
	 * The province of the address.
	 */
	@LiquidObject.property() get province() {
		return new DataType(Primitive.string);
	}

	/**
	 * The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).
	 */
	@LiquidObject.property() get provinceCode() {
		return new DataType(Primitive.string);
	}

	/**
	 * A combination of the first and second lines of the address.
	 */
	@LiquidObject.property() get street() {
		return new DataType(Primitive.string);
	}

	/**
	 * A summary of the address, including the following properties:
	 *
	 * *   First and last name
	 * *   First and second lines
	 * *   City
	 * *   Province
	 * *   Country
	 */
	@LiquidObject.property() get summary() {
		return new DataType(Primitive.string);
	}

	/**
	 * The relative URL for the address.
	 */
	@LiquidObject.property() get url() {
		return new DataType(Primitive.string);
	}

	/**
	 * The zip or postal code of the address.
	 */
	@LiquidObject.property() get zip() {
		return new DataType(Primitive.string);
	}
}

export const address = new Address();
