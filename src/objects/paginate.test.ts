import { strictEqual } from "node:assert";
import { describe, test } from "node:test";
import { paginate } from "./paginate";

describe("Objects/paginate", () => {
	test("paginate properties", () => {
		strictEqual(String(paginate), "paginate");
		strictEqual(String(paginate.currentOffset), "paginate.current_offset");
		strictEqual(String(paginate.currentPage), "paginate.current_page");
		strictEqual(String(paginate.items), "paginate.items");
		strictEqual(String(paginate.next), "paginate.next");
		strictEqual(String(paginate.pageParam), "paginate.page_param");
		strictEqual(String(paginate.pageSize), "paginate.page_size");
		strictEqual(String(paginate.pages), "paginate.pages");
		strictEqual(String(paginate.parts), "paginate.parts");
		strictEqual(String(paginate.previous), "paginate.previous");
	});
});