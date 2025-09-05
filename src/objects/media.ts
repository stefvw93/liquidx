import { Image } from "./image";
import { LiquidObject } from "./object";

export type MediaType = ("image" | "model" | "video" | "external_video") & {};

export class Media extends LiquidObject {
	@LiquidObject.property() mediaType = "media_type";
	@LiquidObject.property() preview = new Image();
}

export const media = new Media();
