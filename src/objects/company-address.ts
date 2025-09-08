import { Country } from "@/objects/country";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * The address of a company location.

*/
export class CompanyAddress extends LiquidObject {
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
	 * The attention line of the address.
	 */
	@LiquidObject.property() get attention() {
		return new DataType(Primitive.string);
	}

	/**
	 * The city of the address.
	 */
	@LiquidObject.property() get city() {
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
	 * The zip or postal code of the address.
	 */
	@LiquidObject.property() get zip() {
		return new DataType(Primitive.string);
	}
}

export const companyAddress = new CompanyAddress();
