import { ShopLocale } from "@/objects/shop-locale";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

class Test extends LiquidObject {
	@LiquidObject.property() availableLanguages = new LiquidArray(
		() => new ShopLocale(),
	);
}
console.log(String(new Test().availableLanguages[0].endonymName));
