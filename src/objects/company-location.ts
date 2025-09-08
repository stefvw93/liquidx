import { Company } from "@/objects/company";
import { CompanyAddress } from "@/objects/company-address";
import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A location of the [company](https://shopify.dev/docs/api/liquid/objects/company) that a [customer](https://shopify.dev/docs/api/liquid/objects/customer) is purchasing for.

*/
export class CompanyLocation extends LiquidObject {
	/**
	 * The company that the location is associated with.
	 */
	@LiquidObject.property() get company() {
		return new Company();
	}

	/**
	 * Returns `true` if the location is currently selected. Returns `false` if not.
	 */
	@LiquidObject.property() get "current?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The external ID of the location.
	 */
	@LiquidObject.property() get externalId() {
		return new DataType(Primitive.string);
	}

	/**
	 * The ID of the location.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the company location.
	 */
	@LiquidObject.property() get metafields() {
		return new LiquidArray(() => new Metafield());
	}

	/**
	 * The name of the location.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * The address of the location.
	 */
	@LiquidObject.property() get shippingAddress() {
		return new CompanyAddress();
	}

	/**
	 * The tax ID of the location.
	 */
	@LiquidObject.property() get taxRegistrationId() {
		return new DataType(Primitive.number);
	}

	/**
	 * The URL to set the location as the current location for the customer.
	 */
	@LiquidObject.property() get urlToSetAsCurrent() {
		return new DataType(Primitive.string);
	}
}

export const companyLocation = new CompanyLocation();
