import { before, describe, test } from "node:test";
import { checkLiquidString, setupTheme } from "~/test-utils/theme-setup";
import { Else, If } from "./conditional";
import { Break, Continue, Cycle, For, Paginate, TableRow } from "./iteration";
import { Echo } from "./syntax";

describe("Tags/Iteration", () => {
	before(setupTheme);

	test("for", async () => {
		await checkLiquidString(
			<For array="items">{(item) => <div>{`{{${item}}}`}</div>}</For>,
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
			<Paginate array="collection.products" by={10}>
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
});
