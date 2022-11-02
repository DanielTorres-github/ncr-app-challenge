import { validAccountType } from "./ValidAccount";

describe("ValidAccount", () => {
  it("Si el tipo es CC o CA devuelve true", () => {
    const cc = validAccountType({
      tipo_letras: "CC"
    });
    expect(cc).toBe(true);
  });
});
