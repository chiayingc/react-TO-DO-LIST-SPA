import React from "react";
import AddForm from "./components/AddForm.js";
import List from"./components/List.js";
import ListPage from "./components/ListPage.js";

function Title() {
    return (
        <h3>To Do List SPA</h3>
    );
}

function App() {
    return (
        <div>
        <ListPage/>
        </div>

    );
}


export { Title, App };