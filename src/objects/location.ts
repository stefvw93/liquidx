import { Address } from "@/objects/address";
import { Metafield } from "@/objects/metafield";
import { DataType, Primitive } from "@/util/data";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A store [location](https://help.shopify.com/manual/locations).

*/
export class Location extends LiquidObject {
	/**
	 * The location's address.
	 */
	@LiquidObject.property() get address() {
		return new Address();
	}

	/**
	 * The location's ID.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The latitude of the location's address.
	 */
	@LiquidObject.property() get latitude() {
		return new DataType(Primitive.number);
	}

	/**
	 * The longitude of the location's address.
	 */
	@LiquidObject.property() get longitude() {
		return new DataType(Primitive.number);
	}

	/**
	 * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the location.
	 */
	@LiquidObject.property() get metafields() {
		return new Dictionary(() => new Metafield());
	}

	/**
	 * The location's name.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}
}

export const location = new Location();
