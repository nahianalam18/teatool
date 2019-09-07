import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TopTab from "./components/navTab";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <TopTab></TopTab>
      {/* <header className="App-header">
        <h1>Hello World</h1>
      </header> */}
    </div>
  );
}

export default App;
