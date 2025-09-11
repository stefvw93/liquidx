import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { poweredByLink } from "./powered-by-link";

describe("Objects/poweredByLink", () => {
	test("poweredByLink properties", () => {
		strictEqual(String(poweredByLink), "powered_by_link");
	});
});
