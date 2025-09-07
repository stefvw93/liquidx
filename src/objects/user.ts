import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

export class User extends LiquidObject {
	/** The email of the user. */
	@LiquidObject.property() email = new DataType(Primitive.string);
}

export const user = new User();
