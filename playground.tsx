import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

class Test extends LiquidObject {
	@LiquidObject.property() a = new DataType(Primitive.string);
	@LiquidObject.property() "some-array" = new LiquidArray(
		() => new DataType(Primitive.string),
	);
}

console.log(String(new Test().a));

const tc = new Test()["some-array"].totalCount;
console.log(tc, String(tc));
