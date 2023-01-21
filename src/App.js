import React from "react";
import ListPage from "./components/ListPage.js";
import HomePage from "./components/HomePage.js";
import { Route, Routes } from "react-router-dom";



function App() {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/list" element={ <ListPage/> }/>
        </Routes>
    );
}

export default App ;