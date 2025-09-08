import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

export class BrandColor extends LiquidObject {
	@LiquidObject.property() background = new DataType(Primitive.string);
	@LiquidObject.property() foreground = new DataType(Primitive.string);
}

export class BrandColors extends LiquidObject {
	@LiquidObject.property() primary = new LiquidArray(() => new BrandColor());
	@LiquidObject.property() secondary = new LiquidArray(() => new BrandColor());
}
