import React, { useState } from 'react';
import AddForm from './AddForm';
import List from './List';
import "../listpage.css";


function ListPage() {
    const [allMsgs,setAllMsgs]=useState([]);
    function addNewMsg(msg) {
        //如果輸入空的 不記入
        if (msg.msg == "" || /^\s*$/.test(msg.msg)) {
            return;
        }
        let newAllMsgs=[...allMsgs,msg] //把新的訊息加入訊息列表
        setAllMsgs(newAllMsgs);
    }
    
    function removeMsg(e){
        e.stopPropagation();
        let id=e.target.id.replace("dlt","");
        const removeAry=[...allMsgs].filter(msg=>msg.record!=id);
        setAllMsgs(removeAry);
    }

    function goHome(){
        window.location.href="/";
    }

    function Title() {
        return (
            <h3>To Do List SPA</h3>
        );
    }

    return (
        <div>
            <div id="title">
                <Title />
            </div>
            <div id="main">
                <hr/>
                <AddForm onSubmit={addNewMsg} />
                <hr/>
                <List 
                allMsgs={allMsgs}
                removeMsg={removeMsg}
                />
                <button id="gohome_btn" onClick={goHome}>返回首頁</button>
            </div>
            
        </div>
    )
}

export default ListPage

