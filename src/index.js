import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Title,App} from "./App.js";

const title = document.querySelector("#title");
const main = document.querySelector("#main");


ReactDOM.render(<Title/>,title);
ReactDOM.render(<App/>,main);