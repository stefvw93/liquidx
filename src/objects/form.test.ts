import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { form } from "./form";

describe("Objects/form", () => {
	test("form properties", () => {
		strictEqual(String(form), "form");
		strictEqual(String(form.address1), "form.address1");
		strictEqual(String(form.address2), "form.address2");
		strictEqual(String(form.author), "form.author");
		strictEqual(String(form.body), "form.body");
		strictEqual(String(form.city), "form.city");
		strictEqual(String(form.company), "form.company");
		strictEqual(String(form.country), "form.country");
		strictEqual(String(form.email), "form.email");
		strictEqual(String(form.errors), "form.errors");
		strictEqual(String(form.firstName), "form.first_name");
		strictEqual(String(form.id), "form.id");
		strictEqual(String(form.lastName), "form.last_name");
		strictEqual(String(form.message), "form.message");
		strictEqual(String(form.name), "form.name");
		strictEqual(String(form.passwordNeeded), "form.password_needed");
		strictEqual(String(form.phone), "form.phone");
		strictEqual(String(form.province), "form.province");
		strictEqual(
			String(form.setAsDefaultCheckbox),
			"form.set_as_default_checkbox",
		);
		strictEqual(String(form.zip), "form.zip");
	});
});
