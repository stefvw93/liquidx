import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { media } from "./media";

describe("Objects/media", () => {
	test("media properties", () => {
		strictEqual(String(media), "media");
		strictEqual(String(media.alt), "media.alt");
		strictEqual(String(media.id), "media.id");
		strictEqual(String(media.mediaType), "media.media_type");
		strictEqual(String(media.position), "media.position");
		strictEqual(String(media.previewImage), "media.preview_image");
	});
});
