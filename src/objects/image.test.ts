import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { image } from "./image";

describe("Objects/image", () => {
	test("image properties", () => {
		strictEqual(String(image), "image");
		strictEqual(String(image.alt), "image.alt");
		strictEqual(String(image.aspectRatio), "image.aspect_ratio");
		strictEqual(String(image.height), "image.height");
		strictEqual(String(image.id), "image.id");
		strictEqual(String(image.mediaType), "image.media_type");
		strictEqual(String(image.position), "image.position");
		strictEqual(String(image.presentation), "image.presentation");
		strictEqual(String(image.previewImage), "image.preview_image");
		strictEqual(String(image.productId), "image.product_id");
		strictEqual(String(image.src), "image.src");
		strictEqual(String(image.variants), "image.variants");
		strictEqual(String(image.width), "image.width");
	});
});