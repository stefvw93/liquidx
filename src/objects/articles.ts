import { Dictionary } from "@/util/dictionary";
import { Article } from "./article";

export class Articles extends Dictionary<Article> {
	constructor() {
		super(() => new Article());
	}
}

export const articles = new Articles();
