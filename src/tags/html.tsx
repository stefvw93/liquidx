import type { HTMLElements } from "html-jsx";
import type { PropsWithChildren } from "~/jsx-runtime";

export enum FormType {
	ActivateCustomerPassword = "activate_customer_password",
	Cart = "cart",
	Contact = "contact",
	CreateCustomer = "create_customer",
	Currency = "currency",
	Customer = "customer",
	CustomerAddress = "customer_address",
	CustomerLogin = "customer_login",
	GuestLogin = "guest_login",
	Localization = "localization",
	NewComment = "new_comment",
	Product = "product",
	RecoverCustomerPassword = "recover_customer_password",
	ResetCustomerPassword = "reset_customer_password",
	StorefrontPassword = "storefront_password",
}

export type FormParam = string | { toString(): string };
export type FormBaseProps = PropsWithChildren<
	{
		return_to?: "back" | string;
	} & HTMLElements["form"]
>;

/**
 * Generates an HTML <form> tag, including any required <input> tags to submit the form to a specific endpoint.
 * Because there are many different form types available in Shopify themes, the form tag requires a type. Depending on the form type, an additional parameter might be required. You can specify the following form types:
 * - [activate_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-activate_customer_password)
 * - [cart](https://shopify.dev/docs/api/liquid/tags/form#form-cart)
 * - [contact](https://shopify.dev/docs/api/liquid/tags/form#form-contact)
 * - [create_customer](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)
 * - [currency](https://shopify.dev/docs/api/liquid/tags/form#form-currency)
 * - [customer](https://shopify.dev/docs/api/liquid/tags/form#form-customer)
 * - [customer_address](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address)
 * - [customer_login](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)
 * - [guest_login](https://shopify.dev/docs/api/liquid/tags/form#form-guest_login)
 * - [localization](https://shopify.dev/docs/api/liquid/tags/form#form-localization)
 * - [new_comment](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)
 * - [product](https://shopify.dev/docs/api/liquid/tags/form#form-product)
 * - [recover_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)
 * - [reset_customer_password](https://shopify.dev/docs/api/liquid/tags/form#form-reset_customer_password)
 * - [storefront_password](https://shopify.dev/docs/api/liquid/tags/form#form-storefront_password)
 */
export function Form(
	props: FormBaseProps & {
		type: FormType.ActivateCustomerPassword;
		param: FormParam;
	},
): string;

export function Form(
	props: FormBaseProps & {
		type: FormType.Cart;
		param: FormParam;
	},
): string;

export function Form(
	props: FormBaseProps & {
		type: FormType.CustomerAddress;
		param: FormParam;
	},
): string;

export function Form(
	props: FormBaseProps & {
		type: FormType.NewComment;
		param: FormParam;
	},
): string;

export function Form(
	props: FormBaseProps & {
		type: FormType.Product;
		param: FormParam;
	},
): string;

export function Form({
	type,
	param,
	children,
	return_to,
	...attributes
}: FormBaseProps & { type: FormType; param?: string }) {
	let tag = `form '${type}'`;

	if (param) {
		tag += `, ${param}`;
	}

	if (return_to) {
		tag += `, return_to: '${return_to}'`;
	}

	for (const [key, value] of Object.entries(attributes)) {
		tag += `, ${key}: '${String(value).replace(/"/g, "&quot;")}'`;
	}

	return `{% ${tag} %}${children}{% endform %}`;
}

/**
 * Generates an HTML <style> tag with an attribute of data-shopify.
 */
export function Style(props: HTMLElements["style"]) {
	return <style {...props} data-shopify />;
}
