import { Market } from "@/objects/market";
import { ShopLocale } from "@/objects/shop-locale";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

console.log(String(new Market().metafields["some-metafield"]["list?"]));
