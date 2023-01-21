import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createRoot } from "react-dom/client";

const body = document.body;


const body_root = createRoot(body);
body_root.render(<App/>);


