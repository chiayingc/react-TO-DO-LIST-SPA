import React, { useState } from 'react'


function AddForm(props) {
    const [newMsg, setNewMsg] = useState("");
    const [countMsg,setCountMsg]=useState(1);
 
    function handleNewMsg(e){
        setNewMsg(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit({
            record:countMsg,
            msg:newMsg
        });

        setNewMsg('');
        setCountMsg(countMsg+1);
    };

    return (
        <form onSubmit={handleSubmit} className="addForm">
            <input
                type="text"
                placeholder='測試紀錄'
                value={newMsg}
                className="newmsg_textbox"
                onChange={handleNewMsg}
            />
            <input
                type="submit"
                value="新增紀錄"
                className="newmsg_btn"
            />
        </form>
    )
}

export default AddForm

