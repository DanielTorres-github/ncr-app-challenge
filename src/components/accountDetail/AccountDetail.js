export default function AccountDetail({ accountData }) {
  return (
    <div>
      <h4>Consulta de saldo</h4>
      <h1>Este es tu saldo actual</h1>
      <p>
        Saldo de la cuenta: {accountData.moneda} {accountData.saldo}
      </p>
      <p>
        Tipo de Cuenta:{" "}
        {accountData.tipo_letras === "CC"
          ? "Cuenta corriente"
          : "Caja de Ahorro"}{" "}
        en {accountData.moneda === "$" ? "Pesos" : "Dolares"}
      </p>
      <p>Numero de cuenta: {accountData.n}</p>
    </div>
  );
}
