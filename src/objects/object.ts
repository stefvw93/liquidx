const LiquidObjectTypeId = Symbol("liquidx/object");

export class LiquidObject {
  [LiquidObjectTypeId] = LiquidObjectTypeId;

  static isLiquidObject(x: unknown): x is LiquidObject {
    return x != null && typeof x === "object" && LiquidObjectTypeId in x;
  }
}
