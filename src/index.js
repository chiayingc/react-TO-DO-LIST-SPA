import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Title,App} from "./App.js";
import { createRoot } from "react-dom/client";

const title = document.querySelector("#title");
const main = document.querySelector("#main");


const title_root = createRoot(title);
title_root.render(<Title/>);

const main_root=createRoot(main);
main_root.render(<App/>);

