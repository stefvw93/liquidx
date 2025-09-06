import { LiquidObject } from "@/util/object";

export class NotImplemented extends LiquidObject {
	constructor() {
		super();
		console.warn(`${this.constructor.name} is not implemented!`);
	}
}
