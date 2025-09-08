import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

export class NameAndValue extends LiquidObject {
	@LiquidObject.property() name = new DataType(Primitive.string);
	@LiquidObject.property() value = new DataType(Primitive.string);
}
