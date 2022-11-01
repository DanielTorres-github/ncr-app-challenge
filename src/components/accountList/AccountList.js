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

  function getAccounts() {
    const pageSize = isFirstPage() || isLastPage() ? 5 : 4;
    return accounts.slice(page * pageSize, page * pageSize + pageSize);
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
