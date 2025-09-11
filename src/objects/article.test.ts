import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { article } from "./article";

describe("Objects/article", () => {
	test("article properties", () => {
		strictEqual(String(article), "article");
		strictEqual(String(article.author), "article.author");
		strictEqual(String(article.commentPostUrl), "article.comment_post_url");
		strictEqual(String(article.comments), "article.comments");
		strictEqual(
			String(article.comments[0].author),
			"article.comments[0].author",
		);
		strictEqual(String(article.commentsCount), "article.comments_count");
		strictEqual(
			String(article["commentsEnabled?"]),
			"article['commentsEnabled?']",
		);
		strictEqual(String(article.content), "article.content");
		strictEqual(String(article.createdAt), "article.created_at");
		strictEqual(String(article.excerpt), "article.excerpt");
		strictEqual(String(article.excerptOrContent), "article.excerpt_or_content");
		strictEqual(String(article.handle), "article.handle");
		strictEqual(String(article.id), "article.id");
		strictEqual(String(article.image), "article.image");
		strictEqual(String(article.metafields), "article.metafields");
		strictEqual(String(article["moderated?"]), "article['moderated?']");
		strictEqual(String(article.publishedAt), "article.published_at");
		strictEqual(String(article.tags), "article.tags");
		strictEqual(String(article.templateSuffix), "article.template_suffix");
		strictEqual(String(article.title), "article.title");
		strictEqual(String(article.updatedAt), "article.updated_at");
		strictEqual(String(article.url), "article.url");
		strictEqual(String(article.user), "article.user");
	});
});
