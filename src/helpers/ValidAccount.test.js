import { validAccountCurrency, validAccountNumber, validAccountType } from "./ValidAccount";

describe("ValidAccountType", () => {
  it("Si el tipo es CC o CA devuelve true", () => {
    const isValid = validAccountType({
      tipo_letras: "CC"
    });
    expect(isValid).toBe(true);
  });

  it("Si el tipo es distinto de CC o CA devuelve false", () => {
    const isValid = validAccountType({
      tipo_letras: "CCP"
    });
    expect(isValid).toBe(false);
  });
});

describe("ValidAccountCurrency", () => {
  it("Si el tipo de moneda es $ o u$s devuelve true", () => {
    const isValid = validAccountCurrency({
      moneda: "$"
    });
    expect(isValid).toBe(true);
  });

  it("Si el tipo de moneda es distinto de $ o u$s devuelve false", () => {
    const isValid = validAccountCurrency({
      moneda: "uy$"
    });
    expect(isValid).toBe(false);
  });
});

describe("ValidAccountNumber", () => {
  it("Si el numero de cuenta existe devuelve true", () => {
    const isValid = validAccountNumber({
      n: "75679684913"
    });
    expect(isValid).toBe(true);
  });

  it("Si el numero de cuenta existe devuelve false", () => {
    const isValid = validAccountNumber({
      n: ""
    });
    expect(isValid).toBe(false);
  });
});