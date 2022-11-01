import AccountList from "./components/accountList/AccountList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="banner"></div>
        <AccountList></AccountList>
      </div>
    </div>
  );
}
