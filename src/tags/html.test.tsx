import { describe, test } from "node:test";
import { Product } from "@/objects/product";
import { css } from "@/util/css";
import { checkLiquidString } from "~/test-utils/theme-setup";
import { Form, FormType, Style } from "./html";
import { Echo } from "./syntax";

describe("Tags/HTML", () => {
	test("form", async () => {
		await checkLiquidString(
			<Form
				type={FormType.Product}
				param={Product}
				return_to="back"
				id="product_form"
				class={<Echo>{`'some-class'`}</Echo>}
			>
				content
			</Form>,
		);
	});

	test("style", async () => {
		await checkLiquidString(
			<Style>{css`.some-style { color: red; background-color: blue; }`}</Style>,
		);
	});
});
