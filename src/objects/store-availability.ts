import { Location } from "@/objects/location";
import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A variant's inventory information for a physical store location.

*/
export class StoreAvailability extends LiquidObject {
	/**
	 * Returns `true` if the variant has available inventory at the location. Returns `false` if not.
	 */
	@LiquidObject.property() get available() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The location that the variant is stocked at.
	 */
	@LiquidObject.property() get location() {
		return new Location();
	}

	/**
	 * Returns `true` if the location has pickup enabled. Returns `false` if not.
	 */
	@LiquidObject.property() get pickUpEnabled() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The amount of time that it takes for pickup orders to be ready at the location.
	 */
	@LiquidObject.property() get pickUpTime() {
		return new DataType(Primitive.string);
	}
}

export const storeAvailability = new StoreAvailability();
