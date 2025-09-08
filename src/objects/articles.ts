import { Dictionary } from "@/util/dictionary";
import { Article } from "./article";

/**
 * All of the articles across the blogs in the store.

*/
export class Articles extends Dictionary<Article> {}

export const articles = new Articles(() => new Article());
