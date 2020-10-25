import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Settings from "./components/settings";

const AddWord = () => {
  return <Settings />;
};

const destination = document.getElementById("root");
ReactDom.render(<AddWord />, destination);
