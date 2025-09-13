import { before, describe, test } from "node:test";
import { allProducts } from "@/objects/all-products";
import { collection } from "@/objects/collection";
import { checkLiquidString, setupTheme } from "~/test-utils/theme-setup";
import { Else, If } from "./conditional";
import { Break, Continue, Cycle, For, Paginate, TableRow } from "./iteration";
import { Echo } from "./syntax";

describe("Tags/Iteration", () => {
	before(setupTheme);

	test("for", async () => {
		await checkLiquidString(
			<For array="items">
				{(item) => (
					<div>
						<Echo>{item}</Echo>
					</div>
				)}
			</For>,
		);
	});

	test("for with variable name", async () => {
		await checkLiquidString(
			<For variable="item" array="items">
				expression
			</For>,
		);
	});

	test("break", async () => {
		await checkLiquidString(
			<For variable="i" array="(1..5)">
				expression
				<If condition="i > 1">
					<Break />
				</If>
			</For>,
		);
	});

	test("continue", async () => {
		await checkLiquidString(
			<For variable="i" array="(1..5)">
				expression
				<If condition="i > 1">
					<Continue />
				</If>
			</For>,
		);
	});

	test("cycle", async () => {
		await checkLiquidString(
			<For variable="i" array="(1..5)">
				<Cycle values={["value1", "value2"]}>expression</Cycle>
			</For>,
		);

		await checkLiquidString(
			<For variable="i" array="(1..5)">
				<Cycle
					values={{
						group1: ["value1", "value2"],
						group2: ["value1", "value2"],
					}}
				>
					expression
				</Cycle>
			</For>,
		);
	});

	test("else", async () => {
		await checkLiquidString(
			<For variable="variable" array="empty">
				<Else>expression</Else>
			</For>,
		);
	});

	test("paginate", async () => {
		await checkLiquidString(
			<Paginate array={collection.products} by={10}>
				{(array) => (
					<For array={array}>
						{(variable, _array) => (
							<div>
								<Echo>{variable}</Echo>
							</div>
						)}
					</For>
				)}
			</Paginate>,
		);

		await checkLiquidString(
			<Paginate array={allProducts} by={10}>
				{(array) => (
					<For array={String(array)}>
						{(variable, _array) => (
							<div>
								<Echo>{variable}</Echo>
							</div>
						)}
					</For>
				)}
			</Paginate>,
		);
	});

	test("tablerow", async () => {
		await checkLiquidString(
			<TableRow array="collection.products">
				{(variable, _array) => (
					<div>
						<Echo>{variable}</Echo>
					</div>
				)}
			</TableRow>,
		);
	});

	describe("for parameters", () => {
		describe("limit parameter", () => {
			test("with numeric limit", async () => {
				await checkLiquidString(
					<For array="products" limit={5}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("with string variable limit", async () => {
				await checkLiquidString(
					<For
						array="collection.products"
						limit="section.settings.product_limit"
					>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("with limit on range", async () => {
				await checkLiquidString(
					<For array="1..100" limit={10}>
						{(i) => <Echo>{i}</Echo>}
					</For>,
				);
			});

			test("with limit on custom variable", async () => {
				await checkLiquidString(
					<For array="items" variable="product" limit={3}>
						<Echo>product</Echo>
					</For>,
				);
			});
		});

		describe("offset parameter", () => {
			test("with numeric offset", async () => {
				await checkLiquidString(
					<For array="products" offset={10}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("with string variable offset", async () => {
				await checkLiquidString(
					<For array="collection.products" offset="paginate.current_offset">
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("with offset on range", async () => {
				await checkLiquidString(
					<For array="1..50" offset={5}>
						{(i) => <Echo>{i}</Echo>}
					</For>,
				);
			});
		});

		describe("reversed parameter", () => {
			test("with reversed true", async () => {
				await checkLiquidString(
					<For array="products" reversed>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("with reversed on range", async () => {
				await checkLiquidString(
					<For array="1..10" reversed>
						{(i) => <Echo>{i}</Echo>}
					</For>,
				);
			});

			test("reversed false should not output reversed", async () => {
				const { liquid } = await checkLiquidString(
					<For array="products" reversed={false}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);

				// Should not contain "reversed" in the output
				if (liquid.includes("reversed")) {
					throw new Error("reversed=false should not output 'reversed' in tag");
				}
			});
		});

		describe("parameter combinations", () => {
			test("limit and offset together", async () => {
				await checkLiquidString(
					<For array="products" limit={10} offset={5}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("limit and reversed together", async () => {
				await checkLiquidString(
					<For array="collection.products" limit={20} reversed>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("offset and reversed together", async () => {
				await checkLiquidString(
					<For array="items" offset={10} reversed>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("all parameters together", async () => {
				await checkLiquidString(
					<For array="products" limit={15} offset={5} reversed>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("all parameters with variables", async () => {
				await checkLiquidString(
					<For
						array="collection.products"
						limit="settings.limit"
						offset="settings.offset"
						reversed
					>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});
		});

		describe("edge cases", () => {
			test("zero limit", async () => {
				await checkLiquidString(
					<For array="products" limit={0}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("zero offset", async () => {
				await checkLiquidString(
					<For array="products" offset={0}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("undefined parameters should not appear", async () => {
				const { liquid } = await checkLiquidString(
					<For array="products" limit={undefined} offset={undefined}>
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);

				// Should not contain "limit:" or "offset:" in the output
				if (liquid.includes("limit:") || liquid.includes("offset:")) {
					throw new Error("undefined parameters should not output in tag");
				}
			});

			test("complex variable reference in limit", async () => {
				await checkLiquidString(
					<For array="products" limit="section.blocks[0].settings.count">
						{(item) => <Echo>{item}</Echo>}
					</For>,
				);
			});

			test("with children as non-function", async () => {
				await checkLiquidString(
					<For array="products" limit={3} reversed>
						<div>Static content</div>
					</For>,
				);
			});
		});
	});
});
