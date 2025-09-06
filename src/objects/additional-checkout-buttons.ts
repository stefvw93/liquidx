import { DataType, Primitive } from "./data";

class AdditionalCheckoutButtons extends DataType<Primitive.boolean> {}

export const additionalCheckoutButtons = new AdditionalCheckoutButtons(
	Primitive.boolean,
);
