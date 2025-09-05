import { DataType } from "@/types";
import type { Filter } from "..";

export const upcase: Filter<string, string> = (_) => ({
	type: DataType.string,
	pipe: ["upcase"],
});
