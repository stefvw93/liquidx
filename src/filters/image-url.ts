import type { Image } from "@/objects/image";
import type { Product } from "@/objects/product";
import { DataType, Primitive } from "@/util/data";
import { buildFilter, type Filter } from ".";

export const imageUrl: (size?: {
	width?: number;
	height?: number;
}) => Filter<
	Product | Image | DataType<Primitive.string>,
	DataType<Primitive.string>
> = (size) => (object) => ({
	type: new DataType(Primitive.string),
	pipe: [String(object), buildFilter("image_url", size)],
});
