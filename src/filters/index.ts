import type { LiquidObject } from "@/util/object";

export interface FilterDescriptor<A extends LiquidObject> {
	type: A;
	pipe: string[];
}

export type Filter<A extends LiquidObject, B extends LiquidObject> = (
	a: A,
) => FilterDescriptor<B>;

export function filter<A extends LiquidObject, B extends LiquidObject = never>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
): string;

export function filter<
	A extends LiquidObject,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
): string;

export function filter<
	A extends LiquidObject,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
): string;

export function filter<
	A extends LiquidObject,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
	E extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
): string;

export function filter<
	A,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
	E extends LiquidObject = never,
	F extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
	ef: (e: E) => FilterDescriptor<F>,
): string;

export function filter<
	A,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
	E extends LiquidObject = never,
	F extends LiquidObject = never,
	G extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
	ef: (e: E) => FilterDescriptor<F>,
	fg: (f: F) => FilterDescriptor<G>,
): string;

export function filter<
	A,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
	E extends LiquidObject = never,
	F extends LiquidObject = never,
	G extends LiquidObject = never,
	H extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
	ef: (e: E) => FilterDescriptor<F>,
	fg: (f: F) => FilterDescriptor<G>,
	gh: (g: G) => FilterDescriptor<H>,
): string;

export function filter<
	A,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
	E extends LiquidObject = never,
	F extends LiquidObject = never,
	G extends LiquidObject = never,
	H extends LiquidObject = never,
	I extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
	ef: (e: E) => FilterDescriptor<F>,
	fg: (f: F) => FilterDescriptor<G>,
	gh: (g: G) => FilterDescriptor<H>,
	hi: (h: H) => FilterDescriptor<I>,
): string;

export function filter<
	A,
	B extends LiquidObject = never,
	C extends LiquidObject = never,
	D extends LiquidObject = never,
	E extends LiquidObject = never,
	F extends LiquidObject = never,
	G extends LiquidObject = never,
	H extends LiquidObject = never,
	I extends LiquidObject = never,
	J extends LiquidObject = never,
>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
	ef: (e: E) => FilterDescriptor<F>,
	fg: (f: F) => FilterDescriptor<G>,
	gh: (g: G) => FilterDescriptor<H>,
	hi: (h: H) => FilterDescriptor<I>,
	ij: (i: I) => FilterDescriptor<J>,
): string;

export function filter(
	a: unknown,
	...fns: ((a: unknown) => FilterDescriptor<LiquidObject>)[]
): string {
	let result = a;
	const pipe: string[] = [];

	for (const fn of fns) {
		const nextResult = fn(result);
		pipe.push(...nextResult.pipe);
		result = nextResult.type;
	}

	return pipe.join(" | ");
}

export function buildFilter(
	filter: string,
	attributes?: Record<string, unknown>,
): string {
	if (attributes) {
		Object.entries(attributes).forEach(([key, value], index) => {
			if (index === 0) {
				filter += ": ";
			}

			if (index > 0) {
				filter += ", ";
			}

			filter += `${key}: ${value}`;
		});
	}

	return filter;
}
