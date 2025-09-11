import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { blog } from "./blog";

describe("Objects/blog", () => {
	test("blog properties", () => {
		strictEqual(String(blog), "blog");
		strictEqual(String(blog.allTags), "blog.all_tags");
		strictEqual(String(blog.articles), "blog.articles");
		strictEqual(String(blog.articlesCount), "blog.articles_count");
		strictEqual(String(blog["commentsEnabled?"]), "blog['commentsEnabled?']");
		strictEqual(String(blog.handle), "blog.handle");
		strictEqual(String(blog.id), "blog.id");
		strictEqual(String(blog.metafields), "blog.metafields");
		strictEqual(String(blog["moderated?"]), "blog['moderated?']");
		strictEqual(String(blog.nextArticle), "blog.next_article");
		strictEqual(String(blog.previousArticle), "blog.previous_article");
		strictEqual(String(blog.tags), "blog.tags");
		strictEqual(String(blog.templateSuffix), "blog.template_suffix");
		strictEqual(String(blog.title), "blog.title");
		strictEqual(String(blog.url), "blog.url");
	});
});
