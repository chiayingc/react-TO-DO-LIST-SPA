import React, { useState, useEffect } from 'react';
import AddForm from './AddForm';
import List from './List';
import "../listpage.css";
import { collection, addDoc , setDoc, getDocs } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';
import { onSnapshot  } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase-config.js'

function ListPage() {
    const [allMsgs,setAllMsgs]=useState([]);

    useEffect(()=>{
        const showMsg=onSnapshot(
            collection(db,"msg-list"),(snapshot)=>{
                let messageList=[];
                snapshot.forEach((doc)=>{
                    messageList.push({...doc.data(), record:doc.data().record});
            });
        setAllMsgs(messageList);   
        });
        return showMsg;
    },[]);


    async function addNewMsg(msg) {
        //如果輸入空的 不記入
        if (msg.msg == "" || /^\s*$/.test(msg.msg)) {
            return;
        }
        let newAllMsgs=[...allMsgs,msg] //把新的訊息加入訊息列表
        setAllMsgs(newAllMsgs);
        // await addDoc(collection(db,"msg-list"),{msg:msg}); //放進firestore
        // console.log("add");
        // console.log(msg);

        try{
            const docRef = await setDoc(doc(db,"msg-list","msg"+msg.record),{
                record:msg.record,
                msg:msg.msg
            });
            console.log("doc written with id");
            
        }catch(e){
            console.error("error adding document:",e);
        }


    }
    
    async function removeMsg(e){
        // let id=e.target.id.replace("dlt","");
        // const removeAry=[...allMsgs].filter(msg=>msg.record!=id);
        // setAllMsgs(removeAry);

        let id=e.target.id.replace("dlt","");
        const removeAry=[...allMsgs].filter(msg=>msg.record!=id);
        const theMsg=doc(db,"msg-list","msg"+id);
        await deleteDoc(theMsg);
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

