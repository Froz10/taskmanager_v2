import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "../components/HelloWorld";
import "./index.css";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloWorld />,
    document.body.appendChild(document.createElement('div')),
  )
})