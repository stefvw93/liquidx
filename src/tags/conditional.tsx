import type { LiquidObject } from "@/util/object";
import type { PropsWithChildren } from "~/jsx-runtime";
import { LiquidComponent, LiquidTag } from "./_tag";

/**
 * Renders a specific expression depending on the value of a specific variable.
 */
export const Case = new LiquidComponent<
	PropsWithChildren<{ variable: { toString(): string } | LiquidObject }>
>(
	LiquidTag.Case,
	(props) => [["variable", String(props.variable)]],
	(props) => props.children,
);

export const When = new LiquidComponent<
	PropsWithChildren<{ values: unknown[] }>
>(
	LiquidTag.When,
	(props) => [["values", props.values.join(", ")]],
	(props) => props.children,
);

/**
 * Allows you to specify a default expression to execute when no other condition is met.
 * You can use the else tag with the following tags:
 * - case
 * - if
 * - unless
 */
export const Else = new LiquidComponent<PropsWithChildren>(
	LiquidTag.Else,
	() => [],
	(props) => props.children,
);

/**
 * Renders an expression if a specific condition is true.
 */
export const If = new LiquidComponent<
	PropsWithChildren<{ condition: unknown }>
>(
	LiquidTag.If,
	(props) => [["condition", String(props.condition)]],
	(props) => props.children,
);

/**
 * You can use the elsif tag to check for multiple conditions.
 */
export const Elsif = new LiquidComponent<
	PropsWithChildren<{ condition: unknown }>
>(
	LiquidTag.ElseIf,
	(props) => [["condition", String(props.condition)]],
	(props) => props.children,
);

/**
 * Renders an expression unless a specific condition is true.
 */
export const Unless = new LiquidComponent<
	PropsWithChildren<{ condition: unknown }>
>(
	LiquidTag.Unless,
	(props) => [["condition", String(props.condition)]],
	(props) => props.children,
);
