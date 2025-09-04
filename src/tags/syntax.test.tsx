import { describe, test } from "node:test";
import { checkLiquidString } from "~/test-utils/theme-setup";
import { Comment, Doc, Echo, Liquid, Raw } from "./syntax";

describe("Tags/Syntax", () => {
	test("comment", async () => {
		await checkLiquidString(<Comment>expression</Comment>);
	});

	test("doc", async () => {
		await checkLiquidString(
			<Doc>
				{`Renders a message.

        @param {string} "foo" - A string value.
        @param {string} "[bar]" - An optional string value.
        `}
			</Doc>,
		);
	});

	test("echo", async () => {
		await checkLiquidString(
			<div class={<Echo>expression1</Echo>}>
				<Echo>expression2</Echo>
			</div>,
		);
	});

	test("liquid", async () => {
		await checkLiquidString(
			<Liquid>
				{`
          assign value = 'hello'
          echo value
        `}
			</Liquid>,
		);
	});

	test("raw", async () => {
		await checkLiquidString(<Raw>{`{{ 2 | plus: 2 }} equals 4.`}</Raw>);
	});
});
