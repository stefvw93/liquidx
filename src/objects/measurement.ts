import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

/**
 * A measurement from one of the following metafield types:
 * 
 * *   `dimension`
 * *   `volume`
 * *   `weight`

*/
export class Measurement extends LiquidObject {
	/**
	 * The measurement type.
	 */
	@LiquidObject.property() get type() {
		return new DataType(Primitive.string);
	}

	/**
	 * The measurement unit.
	 */
	@LiquidObject.property() get unit() {
		return new DataType(Primitive.string);
	}

	/**
	 * The measurement value.
	 */
	@LiquidObject.property() get value() {
		return new DataType(Primitive.number);
	}
}

export const measurement = new Measurement();
