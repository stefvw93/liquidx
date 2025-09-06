import { filter } from "@/filters";
import { imageUrl } from "@/filters/image-url";
import { downcase, upcase } from "@/filters/string";
import { additionalCheckoutButtons } from "@/objects/additional-checkout-buttons";
import { address } from "@/objects/address";
import { DataType, Primitive } from "@/objects/data";
import { product } from "@/objects/product";
import { Echo } from "@/tags/syntax";
import { Dictionary } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

class Test extends LiquidObject {
	@LiquidObject.property() "some-dict" = new Dictionary(
		() => new Dictionary(() => new DataType(Primitive.string)),
	);
}
console.log(String(new Test()["some-dict"].foo.bar));
