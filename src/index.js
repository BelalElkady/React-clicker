import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.js";
import Main from "./main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
