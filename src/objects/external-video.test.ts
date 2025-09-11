import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { externalVideo } from "./external-video";

describe("Objects/externalVideo", () => {
	test("externalVideo properties", () => {
		strictEqual(String(externalVideo), "external_video");
		strictEqual(String(externalVideo.alt), "external_video.alt");
		strictEqual(
			String(externalVideo.aspectRatio),
			"external_video.aspect_ratio",
		);
		strictEqual(String(externalVideo.externalId), "external_video.external_id");
		strictEqual(String(externalVideo.host), "external_video.host");
		strictEqual(String(externalVideo.id), "external_video.id");
		strictEqual(String(externalVideo.mediaType), "external_video.media_type");
		strictEqual(String(externalVideo.position), "external_video.position");
		strictEqual(
			String(externalVideo.previewImage),
			"external_video.preview_image",
		);
	});
});
