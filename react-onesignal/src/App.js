import logo from "./logo.svg";
import "./App.css";
import OneSignalReact from "react-onesignal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    OneSignalReact.init({
      appId: "1e8d6a0d-aca6-490b-8aed-666f935aabf3",
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
