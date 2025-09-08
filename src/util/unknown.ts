import { LiquidObject } from "./object";

/**
 * An unknown object.
 */
export class Unknown extends LiquidObject {
	as<T extends LiquidObject>(type: () => T) {
		return type();
	}
}
