import { DataType, Primitive } from "../util/data";

class AllCountryOptionTags extends DataType<Primitive.string> {}

export const allCountryOptionTags = new AllCountryOptionTags(Primitive.string);
