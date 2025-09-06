import { DataType, Primitive } from "../util/data";
import { LiquidObject } from "../util/object";
import { Image } from "./image";

export type MediaType = ("image" | "model" | "video" | "external_video") & {};

export class Media extends LiquidObject {
	@LiquidObject.property() mediaType = new DataType(Primitive.string);
	@LiquidObject.property() preview = new Image();
}

export const media = new Media();
