import { LiquidObject } from "@/util/object";

/**
 * Returns checkout buttons for any active payment providers with offsite checkouts.

*/
export class ContentForAdditionalCheckoutButtons extends LiquidObject {}

export const contentForAdditionalCheckoutButtons =
	new ContentForAdditionalCheckoutButtons();
