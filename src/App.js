import React from "react";
import ListPage from "./components/ListPage.js";
import "./index.css";

function Title() {
    return (
        <h3>To Do List SPA</h3>
    );
}

function App() {
    return (
        <ListPage/>
    );
}

export { Title, App };