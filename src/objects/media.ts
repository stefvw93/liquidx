import { LiquidObject } from "../util/object";
import { DataType, Primitive } from "./data";
import { Image } from "./image";

export type MediaType = ("image" | "model" | "video" | "external_video") & {};

export class Media extends LiquidObject {
	@LiquidObject.property() mediaType = new DataType(Primitive.string);
	@LiquidObject.property() preview = new Image();
}

export const media = new Media();
