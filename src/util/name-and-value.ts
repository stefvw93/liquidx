import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

export class NameAndValue extends LiquidObject {
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}
	@LiquidObject.property() get value() {
		return new DataType(Primitive.string);
	}
}
