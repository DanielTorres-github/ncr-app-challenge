import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountList from "./components/accountList/AccountList";
import AccountDetail from "./components/accountDetail/AccountDetail";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="banner"></div>
        <div className="box">
          <Routes>
            <Route path={"/"} element={<AccountList></AccountList>}></Route>
            <Route
              path={"/detail/:id"}
              element={<AccountDetail></AccountDetail>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
