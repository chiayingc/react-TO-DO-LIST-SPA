import React, { useState } from 'react'


function List({ allMsgs, removeMsg }) {

    let len = allMsgs.length;
    let msgList = [];
    if (len < 1) {
        msgList.push(<div></div>);
    }
    else {

        for (let j = 0; j < allMsgs.length; j++) {

            let oneMsg = <div>
                <div id={"msg" + allMsgs[j]["record"]} className="msg">
                    {allMsgs[j]["msg"]}
                </div>
                <button id={"dlt" + allMsgs[j]["record"]} onClick={removeMsg} className="dlt_btn" >刪除</button>
            </div>
            msgList.push(oneMsg);
        }
        
    }

    return <div id="msgList">{msgList}</div>;
}

export default List

