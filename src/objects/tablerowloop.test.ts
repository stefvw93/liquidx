import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { tablerowloop } from "./tablerowloop";

describe("Objects/tablerowloop", () => {
	test("tablerowloop properties", () => {
		strictEqual(String(tablerowloop), "tablerowloop");
		strictEqual(String(tablerowloop.col), "tablerowloop.col");
		strictEqual(String(tablerowloop.colFirst), "tablerowloop.col_first");
		strictEqual(String(tablerowloop.colLast), "tablerowloop.col_last");
		strictEqual(String(tablerowloop.col0), "tablerowloop.col0");
		strictEqual(String(tablerowloop.first), "tablerowloop.first");
		strictEqual(String(tablerowloop.index), "tablerowloop.index");
		strictEqual(String(tablerowloop.index0), "tablerowloop.index0");
		strictEqual(String(tablerowloop.last), "tablerowloop.last");
		strictEqual(String(tablerowloop.length), "tablerowloop.length");
		strictEqual(String(tablerowloop.rindex), "tablerowloop.rindex");
		strictEqual(String(tablerowloop.rindex0), "tablerowloop.rindex0");
		strictEqual(String(tablerowloop.row), "tablerowloop.row");
	});
});
