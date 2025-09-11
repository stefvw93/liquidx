import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { comment } from "./comment";

describe("Objects/comment", () => {
	test("comment properties", () => {
		strictEqual(String(comment), "comment");
		strictEqual(String(comment.author), "comment.author");
		strictEqual(String(comment.content), "comment.content");
		strictEqual(String(comment.createdAt), "comment.created_at");
		strictEqual(String(comment.email), "comment.email");
		strictEqual(String(comment.status), "comment.status");
		strictEqual(String(comment.updatedAt), "comment.updated_at");
		strictEqual(String(comment.url), "comment.url");
	});
});