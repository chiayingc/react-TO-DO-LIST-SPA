import React from "react";
import ReactDOM from "react-dom";
import  {MsgItem} from "./List.js";

let Msgs=[];

class MyForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            countMsg:0,
            Msgs:[]
        };
    }

    render(){
        return <div id="content">
            <div id="myform">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input id="text" type="text" value={this.state.msg} 
                                            onChange={this.handleMsgChange.bind(this)}/>
                    <input type="submit" value="新增紀錄"/>
                    <hr/>
                </form>
            </div>
            <div id="mymsglist">  
                <MsgItem msg={this.state.msg} countMsg={this.state.countMsg} Msgs={this.state.Msgs}/>
            </div>
            </div>
            ;
    }
    handleMsgChange(e){
        this.setState({msg:e.currentTarget.value});
    }
    handleSubmit(e){
        e.preventDefault();  //停止瀏覽器預設的表單處理動作(即重新整理網頁)
        Msgs.push(this.state.msg);
        this.setState((currentState)=>({countMsg:currentState.countMsg+1}));
        this.setState({Msgs:Msgs});
    }
}

export default MyForm;