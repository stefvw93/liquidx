import { filter } from "@/filters";
import { imageUrl } from "@/filters/media/image-url";
import { upcase } from "@/filters/media/upcase";
import { product } from "@/objects/product";

const w400 = imageUrl({ width: 400, height: 400 });

const url = filter(
	product,
	(p) => w400(p),
	(url) => upcase(url),
);

console.log({ url });
