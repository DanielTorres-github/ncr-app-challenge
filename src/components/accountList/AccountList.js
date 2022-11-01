import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AccountList() {
  const url = "https://api.npoint.io/97d89162575a9d816661";
  const [accounts, setAccounts] = useState([]);
  const [page, setPage] = useState(0);

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
  }

  function isFirstPage() {
    return page === 0;
  }

  function isLastPage() {
    return Math.floor(accounts.length / 5) === page;
  }
  //getAccounts() muestra la cantidad de cuentas que se especifique en la condicion de pageSize
  // 5 para el caso de la primer y ultima pagina y  muestra 4 para las paginas intermedias
  function getAccounts() {
    const pageSize = isFirstPage() || isLastPage() ? 5 : 4;
    const sizeException = isFirstPage() || isLastPage() ? 0 : 1;
    return accounts.slice(
      page * pageSize + sizeException,
      page * pageSize + pageSize + sizeException
    );
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAccounts(
          data.cuentas.filter(
            (e) =>
              validAccountCurrency(e) &&
              validAccountNumber(e) &&
              validAccountType(e)
          )
        );
      });
  }, []);
  // console.log(accounts);

  function validAccountType(e) {
    return e.tipo_letras === "CC" || e.tipo_letras === "CA";
  }

  function validAccountNumber(e) {
    return e.n.trim();
  }
  function validAccountCurrency(e) {
    return e.moneda === "$" || e.moneda === "u$s";
  }

  return (
    <>
      <h4>Consulta saldo</h4>
      <h1>Seleccionar cuenta a consultar</h1>
      <div className="accountContainer">
        {!isFirstPage() && (
          <button className="accountBox" onClick={prevPage}>
            <p>atras</p>
          </button>
        )}
        {getAccounts().map((e, i) => (
          <div key={i} className="accountBox">
            <Link to={`/detail/${e.n}`}>
              <p>
                {e.tipo_letras === "CC" ? "Cuenta Corriente" : "Caja De Ahorro"}
              </p>
              <p>{e.n}</p>
            </Link>
          </div>
        ))}
        {!isLastPage() && (
          <button className="accountBox" onClick={nextPage}>
            <p>mas opciones</p>
          </button>
        )}
      </div>
    </>
  );
}
