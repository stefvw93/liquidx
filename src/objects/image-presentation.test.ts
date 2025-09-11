import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { imagePresentation } from "./image-presentation";

describe("Objects/imagePresentation", () => {
	test("imagePresentation properties", () => {
		strictEqual(String(imagePresentation), "image_presentation");
		strictEqual(
			String(imagePresentation.focalPoint),
			"image_presentation.focal_point",
		);
	});
});
