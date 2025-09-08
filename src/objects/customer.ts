import { Address } from "@/objects/address";
import { Company } from "@/objects/company";
import { CompanyLocation } from "@/objects/company-location";
import { CustomerPaymentMethod } from "@/objects/customer-payment-method";
import { Order } from "@/objects/order";
import { StoreCreditAccount } from "@/objects/store-credit-account";
import { DataType, Primitive } from "@/util/data";
import { LiquidArray } from "@/util/dictionary";
import { LiquidObject } from "@/util/object";

/**
 * A [customer](https://help.shopify.com/manual/customers) of the store.

*/
export class Customer extends LiquidObject {
	/**
	 * Returns `true` if the customer accepts marketing. Returns `false` if not.
	 */
	@LiquidObject.property() get acceptsMarketing() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * All of the addresses associated with the customer.
	 */
	@LiquidObject.property() get addresses() {
		return new LiquidArray(() => new Address());
	}

	/**
	 * The number of addresses associated with the customer.
	 */
	@LiquidObject.property() get addressesCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * Returns `true` if the customer is a B2B customer. Returns `false` if not.
	 */
	@LiquidObject.property() get "b2b?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The company locations that the customer has access to, or can interact with.
	 */
	@LiquidObject.property() get companyAvailableLocations() {
		return new LiquidArray(() => new CompanyLocation());
	}

	/**
	 * The number of company locations associated with the customer.
	 */
	@LiquidObject.property() get companyAvailableLocationsCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The company that the customer is purchasing for.
	 */
	@LiquidObject.property() get currentCompany() {
		return new Company();
	}

	/**
	 * The currently selected company location.
	 */
	@LiquidObject.property() get currentLocation() {
		return new CompanyLocation();
	}

	/**
	 * The default address of the customer.
	 */
	@LiquidObject.property() get defaultAddress() {
		return new Address();
	}

	/**
	 * The email of the customer.
	 */
	@LiquidObject.property() get email() {
		return new DataType(Primitive.string);
	}

	/**
	 * The first name of the customer.
	 */
	@LiquidObject.property() get firstName() {
		return new DataType(Primitive.string);
	}

	/**
	 * Returns `true` if the email associated with the customer is tied to a [customer account](https://help.shopify.com/manual/customers/customer-accounts). Returns `false` if not.
	 */
	@LiquidObject.property() get hasAccount() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * Returns `true` if an avatar is associated with a customer. Returns `false` if not.
	 */
	@LiquidObject.property() get "hasAvatar?"() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The ID of the customer.
	 */
	@LiquidObject.property() get id() {
		return new DataType(Primitive.number);
	}

	/**
	 * The last name of the customer.
	 */
	@LiquidObject.property() get lastName() {
		return new DataType(Primitive.string);
	}

	/**
	 * The last order placed by the customer, not including test orders.
	 */
	@LiquidObject.property() get lastOrder() {
		return new Order();
	}

	/**
	 * The full name of the customer.
	 */
	@LiquidObject.property() get name() {
		return new DataType(Primitive.string);
	}

	/**
	 * All of the orders placed by the customer.
	 */
	@LiquidObject.property() get orders() {
		return new LiquidArray(() => new Order());
	}

	/**
	 * The total number of orders that the customer has placed.
	 */
	@LiquidObject.property() get ordersCount() {
		return new DataType(Primitive.number);
	}

	/**
	 * The customer's saved payment methods.
	 */
	@LiquidObject.property() get paymentMethods() {
		return new LiquidArray(() => new CustomerPaymentMethod());
	}

	/**
	 * The phone number of the customer.
	 */
	@LiquidObject.property() get phone() {
		return new DataType(Primitive.string);
	}

	/**
	 * The store credit account associated with the customer.
	 */
	@LiquidObject.property() get storeCreditAccount() {
		return new StoreCreditAccount();
	}

	/**
	 * The tags associated with the customer.
	 */
	@LiquidObject.property() get tags() {
		return new LiquidArray(() => new DataType(Primitive.string));
	}

	/**
	 * Returns `true` if the customer is exempt from taxes. Returns `false` if not.
	 */
	@LiquidObject.property() get taxExempt() {
		return new DataType(Primitive.boolean);
	}

	/**
	 * The total amount that the customer has spent on all orders in the currency's subunit.
	 */
	@LiquidObject.property() get totalSpent() {
		return new DataType(Primitive.number);
	}
}

export const customer = new Customer();
