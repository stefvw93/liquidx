export interface FilterDescriptor<A> {
	type: A;
	pipe: string[];
}

export type Filter<A, B> = (a: A) => FilterDescriptor<B>;

export function filter<A, B = never>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
): string;

export function filter<A, B = never, C = never>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
): string;

export function filter<A, B = never, C = never, D = never>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
): string;

export function filter<A, B = never, C = never, D = never, E = never>(
	a: A,
	ab: (a: A) => FilterDescriptor<B>,
	bc: (b: B) => FilterDescriptor<C>,
	cd: (c: C) => FilterDescriptor<D>,
	de: (d: D) => FilterDescriptor<E>,
): string;

export function filter<
	A,
	B = never,
	C = never,
	D = never,
	E = never,
	F = never,
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
	B = never,
	C = never,
	D = never,
	E = never,
	F = never,
	G = never,
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
	B = never,
	C = never,
	D = never,
	E = never,
	F = never,
	G = never,
	H = never,
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
	B = never,
	C = never,
	D = never,
	E = never,
	F = never,
	G = never,
	H = never,
	I = never,
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
	B = never,
	C = never,
	D = never,
	E = never,
	F = never,
	G = never,
	H = never,
	I = never,
	J = never,
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
	...fns: ((a: unknown) => FilterDescriptor<unknown>)[]
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
