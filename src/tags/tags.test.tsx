/** @jsxImportSource ~/dist */

import { before, describe, test } from "node:test";
import { checkLiquidString, setupTheme } from "~/test-utils/theme-setup";
import { Case, Else, Elsif, If, Unless, When } from "./conditional";
import { Break, Continue, Cycle, For, Paginate, TableRow } from "./iteration";

describe("Tags", () => {
	before(setupTheme);

	describe("Conditional", () => {
		test("case", async () => {
			await checkLiquidString(
				<Case variable="myVariable">
					<When values={["when1", "when2"]}>expression1</When>
					<When values={["when3"]}>expression2</When>
					<When values={["when4"]}>expression3</When>
					<Else>fallback</Else>
				</Case>,
			);
		});

		test("if", async () => {
			await checkLiquidString(
				<If condition="condition">
					expression1
					<Elsif condition="other_condition">expression2</Elsif>
					<Else>fallback</Else>
				</If>,
			);
		});

		test("unless", async () => {
			await checkLiquidString(
				<Unless condition="condition">
					expression1
					<Elsif condition="other_condition">expression2</Elsif>
					<Else>fallback</Else>
				</Unless>,
			);
		});
	});

	describe("Iteration", () => {
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
							{(variable, _array) => <div>{`{{ ${variable} }}`}</div>}
						</For>
					)}
				</Paginate>,
			);
		});

		test("tablerow", async () => {
			await checkLiquidString(
				<TableRow array="collection.products">
					{(variable, _array) => <div>{`{{ ${variable} }}`}</div>}
				</TableRow>,
			);
		});
	});
});
