import { brand } from "@/objects/brand";
import { Image } from "@/objects/image";

// Test the types
const image: Image = new Image();
const _previewImage: Image = new Image();

console.log(
	"Brand cover image preview:",
	String(brand.coverImage.previewImage),
);
console.log("Direct image preview:", String(image.previewImage));
console.log("Type test passed!");
