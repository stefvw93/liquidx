import { before, describe, it } from "node:test";
import liquidPlugin from "@shopify/prettier-plugin-liquid/standalone";
import prettier from "prettier/standalone";
import { collection } from "@/objects/collection";
import { For } from "@/tags/iteration";
import { Echo } from "@/tags/syntax";
import { checkLiquidString, setupTheme } from "~/test-utils/theme-setup";

describe("product list", () => {
	before(setupTheme);

	it("should render a product list", async () => {
		const { liquid } = await checkLiquidString(
			<>
				<h1>Products</h1>
				<div>
					<For array={collection.products}>
						{(product) => (
							<div>
								<Echo>{product}</Echo>
							</div>
						)}
					</For>
				</div>
			</>,
		);

		const formatted = await prettier.format(liquid, {
			plugins: [liquidPlugin],
			parser: "liquid-html",
		});

		console.log(formatted);
	});
});
