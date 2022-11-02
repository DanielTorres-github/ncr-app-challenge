import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ValidAccount from "../../helpers/ValidAccount";

export default function AccountDetail() {
  const { id } = useParams();
  const url = "https://api.npoint.io/97d89162575a9d816661";
  const [account, setAccount] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAccount(
          data.cuentas
            .filter((e) => ValidAccount(e))
            .find((element) => element.n === id)
        );
      });
  }, []);

  return (
    <div>
      <h4>Consulta de saldo</h4>
      <h1>Este es tu saldo actual</h1>
      <p>
        Saldo de la cuenta: {account.moneda} {account.saldo}
      </p>
      <p>
        Tipo de Cuenta:{" "}
        {account.tipo_letras === "CC" ? "Cuenta corriente" : "Caja de Ahorro"}{" "}
        en {account.moneda === "$" ? "Pesos" : "Dolares"}
      </p>
      <p>Numero de cuenta: {account.n}</p>
      <Link to="/">
        <button className="accountBox">
          <p>salir</p>
        </button>
      </Link>
    </div>
  );
}
