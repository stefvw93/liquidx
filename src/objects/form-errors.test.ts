import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { formErrors } from "./form-errors";

describe("Objects/formErrors", () => {
	test("formErrors properties", () => {
		strictEqual(String(formErrors), "form_errors");
		strictEqual(String(formErrors.messages), "form_errors.messages");
		strictEqual(
			String(formErrors.translatedFields),
			"form_errors.translated_fields",
		);
	});
});
