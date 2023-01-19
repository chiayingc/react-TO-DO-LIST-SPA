import React, { useState } from 'react';
import AddForm from './AddForm';
import List from './List';


function ListPage() {
    const [allMsgs,setAllMsgs]=useState([]);
    function addNewMsg(msg) {
        // console.log("msg:",msg);
        //如果輸入空的 不記入
        if (msg.msg == "" || /^\s*$/.test(msg.msg)) {
            return;
        }
        let newAllMsgs=[...allMsgs,msg] //把新的訊息加入訊息列表
        setAllMsgs(newAllMsgs);
    }
    
    function removeMsg(e){
        // console.log("rm1",allMsgs,id);
        e.stopPropagation();
        // console.log("hihi");
        // console.log(allMsgs);
        // console.log(e.target.id);
        let id=e.target.id.replace("dlt","");
        const removeAry=[...allMsgs].filter(msg=>msg.record!=id);
        console.log(1,allMsgs);
        console.log(2,removeAry);
        setAllMsgs(removeAry);

        console.log(3,allMsgs);
    }


    // function removeMsg(e){
    //     // console.log("rm1",allMsgs,id);
    //     e.stopPropagation();
    //     console.log("hihi");

  
        // console.log([...allMsgs]);
        // const removeArr=[...allMsgs].filter(msg=>msg.record!==id);
        // setAllMsgs(removeArr);
        // console.log("rm");
    // }

    // function CompleteMsg(id){
    //     let updatedMsgs=msgList.map((msg)=>{
    //         if(msg.record===record){
    //             msg.isComplete=!msg.isComplete;
    //         }
    //         return msg;
    //     });
    //     setAllMsgs(newAllMsgs);
    // }
    

    return (
        <div>
            <hr />
            <AddForm onSubmit={addNewMsg} />
            <List 
              allMsgs={allMsgs}
              removeMsg={removeMsg}
            />
        </div>
    )
}

export default ListPage







// import React, { useState } from 'react';
// import AddForm from './AddForm';
// import List from './List';


// function ListPage() {
//     const [Msgs, setMsgs] = useState([]);
//     const messages = msg => {
//         //如果輸入空的 不記入
//         if (msg.text == "" || /^\s*$/.test(msg.text)) {
//             return;
//         }
//         const newMsg = [...Msgs, msg]; //把新的訊息加入訊息列表
//         setMsgs(newMsg);
//         console.log(newMsg);
//     }

//     function removeMsg(id){
//         const removeArr=[...Msgs].filter(msg=>msg.id!==id)
//         setMsgs(removeArr);
//     }

//     function CompleteMsg(record){
//         let updatedMsgs=Msgs.map(msg=>{
//             if(msg.record===record){
//                 msg.isComplete=!msg.isComplete;
//             }
//             return msg;
//         });
//         setMsgs(updatedMsgs);
//     }

//     return (
//         <div>
//             <hr />
//             <AddForm onSubmit={messages} />
//             <List 
//               Msgs={Msgs}
//               removeMsg={removeMsg}
//             />
//         </div>
//     )
// }

// export default ListPage
