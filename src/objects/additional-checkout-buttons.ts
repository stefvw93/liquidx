import { LiquidObject } from "@/util/object";

/**
 * Returns `true` if a store has any payment providers with offsite checkouts, such as PayPal Express Checkout.

*/
export class AdditionalCheckoutButtons extends LiquidObject {}

export const additionalCheckoutButtons = new AdditionalCheckoutButtons();
