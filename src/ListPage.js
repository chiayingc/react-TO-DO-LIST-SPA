import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./AddForm.js";
import "./List.js";


class MyTitle extends React.Component{
    render(){
        return <h3>To Do List SPA</h3>
    }
}
ReactDOM.render(<MyTitle/>, document.querySelector("#title"));
ReactDOM.render(<MyForm/>,document.querySelector("#main"));

