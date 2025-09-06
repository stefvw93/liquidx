import { filter } from "@/filters";
import { imageUrl } from "@/filters/image-url";
import { downcase, upcase } from "@/filters/string";
import { DataType, Primitive } from "@/objects/data";
import { product } from "@/objects/product";
import { Echo } from "@/tags/syntax";

console.log(`${product.featuredMedia}`);
console.log(`${product.featuredMedia.mediaType}`);
console.log(<Echo>{product.featuredMedia.preview}</Echo>);

console.log(
	<Echo>
		{filter(
			product.featuredMedia.preview,
			imageUrl({ width: 100, height: 100 }),
			upcase,
			downcase,
		)}
	</Echo>,
);
