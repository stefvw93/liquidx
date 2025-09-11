import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { blogs } from "./blogs";

describe("Objects/blogs", () => {
	test("blogs properties", () => {
		strictEqual(String(blogs), "blogs");
	});
});