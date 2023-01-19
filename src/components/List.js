import React, { useState } from 'react'
import AddForm from './AddForm'

function List({ allMsgs, removeMsg }) {

    let len = allMsgs.length;
    // console.log("len",len);
    let msgList = [];
    if (len < 1) {
        msgList.push(<div></div>);
    }
    else {

        console.log(444, allMsgs);

        for (let j = 0; j < allMsgs.length; j++) {

            let oneMsg = <div>
                <div id={"msg" + allMsgs[j]["record"]}>
                    {allMsgs[j]["msg"]}
                </div>
                <button id={"dlt" + allMsgs[j]["record"]} onClick={removeMsg(j+1)} >刪除</button>
            </div>
            msgList.push(oneMsg);
        }
        // for(let j=1;j<5;j++){
        //     console.log(j);
        // }
        // for(let i=1;i=5;i++){

        //     console.log(allMsgs[i+1]["msg"]);
        //     // let oneMsg=
        //     //     <li>
        //     //         {allMsgs[len-1]["msg"]}
        //     //         <button id={"dlt_btn"+i}>刪除</button>
        //     //     </li>;
        //     // msgList.push(oneMsg);
        // }

        // console.log(msgList);

        // let co=allMsgs[len-1]["msg"];
        // let re=allMsgs[len-1]["record"];
        // console.log(1,co,re);
        // msgList.push(co);
    }


    return <div id="msgList">{msgList}</div>;



    // for(let i=1;i=len;i++){
    //     let oneMsg=<div>
    //                  <div id={"msg"+record}>
    //                      {allMsgs.msg}
    //                  </div>
    //                  <div id={"dlt"+record} 
    //                       onClick={removeMsg(record)}>
    //                      刪除
    //                  </div>
    //              </div>
    //     msgList.push(oneMsg);
    // }
    // console.log(msgList);

    // console.log("here:",allMsgs.map((msg)=>(msg)));
    // return "a";
    //   return (


    //     allMsgs.map((msg)=>(
    //         <div>
    //             <div id={"msg"+msg.record}>
    //                 {msg.msg}
    //             </div>
    //             <div id={"dlt"+msg.record} 
    //                  onClick={removeMsg(msg.record)}>
    //                 刪除
    //             </div>
    //         </div>
    //     ));
    //     )
}

export default List












// import React, {useState} from 'react'
// import AddForm from './AddForm'

// function List({Msgs,removeMsg}) {
//     const [allMsg,setAllMsg]=useState({
//         id:null,
//         value:""
//     });

//   return Msgs.map((list,index)=>(
//         <div key={index}>
//             <div key={list.record} onClick={()=>CompleteMsg(list.record)}>
//                 {list.msg}
//             </div>
//             <div id={"dlt"+list.record}
//                  onClick={removeMsg(list.id)}>
//                 刪除
//             </div>
//         </div>
//     ))
// }

// export default List
