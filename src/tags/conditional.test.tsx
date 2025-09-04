import { before, describe, test } from "node:test";
import { checkLiquidString, setupTheme } from "~/test-utils/theme-setup";
import { Case, Else, Elsif, If, Unless, When } from "./conditional";

describe("Tags/Conditional", () => {
	before(setupTheme);

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
