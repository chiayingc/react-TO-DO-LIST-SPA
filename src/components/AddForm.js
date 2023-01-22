import React, { useEffect, useState } from 'react';

function AddForm(props) {
    let now=Date.now();
    const [newMsg, setNewMsg] = useState("");
    const [countMsg,setCountMsg]=useState(now);

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
        setCountMsg(now);
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

