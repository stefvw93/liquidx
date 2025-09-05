import type { Product } from "@/objects/product";
import { DataType } from "@/types";
import { toSnakeCase } from "@/util/snake-case";
import { buildFilter, type Filter } from "..";

export const imageUrl: (size?: {
	width?: number;
	height?: number;
}) => Filter<Product, string> = (size) => (object) => ({
	type: DataType.string,
	pipe: [toSnakeCase(String(object)), buildFilter("image_url", size)],
});
