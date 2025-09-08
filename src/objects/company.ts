import { CompanyLocation } from "@/objects/company-location";
import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A company that a [customer](https://shopify.dev/docs/api/liquid/objects/customer) is purchasing for.

*/
export class Company extends LiquidObject {
	/**
	 * The company locations that the current customer has access to, or can interact with.
	 */
	@LiquidObject.property() get availableLocations() {
		return new LiquidArray(() => new CompanyLocation());
	}

	/**
	 * The number of company locations associated with the customer's company.
	 */
	@LiquidObject.property() get availableLocationsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The external ID of the company.
	 */
	@LiquidObject.property() get externalId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the company.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the company.
	 */
	@LiquidObject.property() get metafields() {
		return new LiquidArray(() => new Metafield());
	}

	/**
	 * The name of the company.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}
}

export const company = new Company();
