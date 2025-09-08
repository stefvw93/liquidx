import { LiquidObject } from "@/util/object";

/**
 * Creates an `<option>` tag for each country and region that's included in a shipping zone on the [Shipping](https://www.shopify.com/admin/settings/shipping) page of the Shopify admin.

*/
export class CountryOptionTags extends LiquidObject {}

export const countryOptionTags = new CountryOptionTags();
