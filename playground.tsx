import { brand } from "@/_requires-manual-review/objects/brand";
import { image, Image } from "@/_requires-manual-review/objects/image";

// Test the types
const testImage: Image = image;
const previewImage: Image = image.previewImage;

console.log("Brand cover image preview:", String(brand.coverImage.previewImage));
console.log("Direct image preview:", String(image.previewImage));
console.log("Type test passed!");
