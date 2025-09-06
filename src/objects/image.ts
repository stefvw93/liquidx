import { DataType, Primitive } from "../util/data";
import { LiquidObject } from "../util/object";

export class Image extends LiquidObject {
	@LiquidObject.property() src = new DataType(Primitive.string);
}

export const image = new Image();
