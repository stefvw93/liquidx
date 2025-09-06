import { DataType, Primitive } from "../util/data";

class AdditionalCheckoutButtons extends DataType<Primitive.boolean> {}

export const additionalCheckoutButtons = new AdditionalCheckoutButtons(
	Primitive.boolean,
);
