import { DataType, Primitive } from "@/util/data";
import { LiquidObject } from "@/util/object";

class Test extends LiquidObject {
	@LiquidObject.property() a = new DataType(Primitive.string);
}

console.log(String(new Test().a));
