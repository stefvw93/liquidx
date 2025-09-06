import { DataType, Primitive } from "@/util/data";
import type { Filter } from "..";

export const upcase: Filter<
	DataType<Primitive.string>,
	DataType<Primitive.string>
> = (_) => ({
	type: new DataType(Primitive.string),
	pipe: ["upcase"],
});

export const downcase: Filter<
	DataType<Primitive.string>,
	DataType<Primitive.string>
> = (_) => ({
	type: new DataType(Primitive.string),
	pipe: ["downcase"],
});
