export function validAccountType(e) {
  return e.tipo_letras === "CC" || e.tipo_letras === "CA";
}

export function validAccountNumber(e) {
  return e.n.trim();
}
export function validAccountCurrency(e) {
  return e.moneda === "$" || e.moneda === "u$s";
}

export default function ValidAccount(e) {
  return (
    validAccountType(e) && validAccountCurrency(e) && validAccountNumber(e)
  );
}
