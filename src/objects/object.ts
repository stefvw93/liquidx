const LiquidObjectTypeId = Symbol("liquidx/object");

export abstract class LiquidObject {
  [LiquidObjectTypeId] = LiquidObjectTypeId;

  static isLiquidObject(x: unknown): x is LiquidObject {
    return x != null && typeof x === "object" && LiquidObjectTypeId in x;
  }

  toString(): string {
    return this.constructor.name;
  }
}
