import { LiquidObject } from "../util/object";
import { DataType, Primitive } from "./data";

export class Image extends LiquidObject {
	constructor() {
		super(LiquidObject.commonObjectConfig);
	}

	@LiquidObject.property() src = new DataType(Primitive.string);
}

export const image = new Image();
