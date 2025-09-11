import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { customer } from "./customer";

describe("Objects/customer", () => {
	test("customer properties", () => {
		strictEqual(String(customer), "customer");
		strictEqual(
			String(customer.acceptsMarketing),
			"customer.accepts_marketing",
		);
		strictEqual(String(customer.addresses), "customer.addresses");
		strictEqual(String(customer.addressesCount), "customer.addresses_count");
		strictEqual(
			String(customer.companyAvailableLocations),
			"customer.company_available_locations",
		);
		strictEqual(
			String(customer.companyAvailableLocationsCount),
			"customer.company_available_locations_count",
		);
		strictEqual(String(customer.currentCompany), "customer.current_company");
		strictEqual(String(customer.currentLocation), "customer.current_location");
		strictEqual(String(customer.defaultAddress), "customer.default_address");
		strictEqual(String(customer.email), "customer.email");
		strictEqual(String(customer.firstName), "customer.first_name");
		strictEqual(String(customer.hasAccount), "customer.has_account");
		strictEqual(String(customer.id), "customer.id");
		strictEqual(String(customer.lastName), "customer.last_name");
		strictEqual(String(customer.lastOrder), "customer.last_order");
		strictEqual(String(customer.name), "customer.name");
		strictEqual(String(customer.orders), "customer.orders");
		strictEqual(String(customer.ordersCount), "customer.orders_count");
		strictEqual(String(customer.paymentMethods), "customer.payment_methods");
		strictEqual(String(customer.phone), "customer.phone");
		strictEqual(
			String(customer.storeCreditAccount),
			"customer.store_credit_account",
		);
		strictEqual(String(customer.tags), "customer.tags");
		strictEqual(String(customer.taxExempt), "customer.tax_exempt");
		strictEqual(String(customer.totalSpent), "customer.total_spent");
	});
});
