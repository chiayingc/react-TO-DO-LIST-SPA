import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const body = document.body;
const body_root = createRoot(body);
body_root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);


