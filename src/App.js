import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import StudentList from "./components/listStudent";
import TopTab from "./components/navTab";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <TopTab></TopTab>
    </div>
  );
}

export default App;
