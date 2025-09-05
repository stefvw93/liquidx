import { product } from "@/objects/product";
import { Echo } from "@/tags/syntax";

console.log(`${product.featuredMedia.mediaType}`);

console.log(<Echo>{product.featuredMedia.preview}</Echo>);
