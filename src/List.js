import React from "react";

class MsgItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let msg;
        let dltBtn;
            let Msgs=[];
        for(let i=0;i<this.props.countMsg;i++){
            // dltBtn=<button id={"dlt_btn"+i}>刪除</button>;
            msg=<li>
                {this.props.Msgs[i]}
                <button id={"dlt_btn"+i}>刪除</button>
            </li>
            // msg=React.createElement("li",null,this.props.Msgs[i]+dltBtn);
            
            Msgs.push(msg);
            // Msgs.push(dltBtn);
        }

        return React.createElement("ul",null,Msgs);
    }
}

export {MsgItem};