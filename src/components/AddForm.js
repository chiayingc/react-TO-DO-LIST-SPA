import React, { useState } from 'react'


function AddForm(props) {
    const [newMsg, setNewMsg] = useState("");
    const [countMsg,setCountMsg]=useState(1);
    // const [allMsgs,setAllMsgs]=useState([]);


    function handleNewMsg(e){
        setNewMsg(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit({
            record:countMsg,
            msg:newMsg
            // allMsgs:allMsgs
        });

        setNewMsg('');
        setCountMsg(countMsg+1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='測試紀錄'
                value={newMsg}
                className=""
                onChange={handleNewMsg}
            />
            <input
                type="submit"
                value="新增紀錄"
            />
        </form>
    )
}

export default AddForm
























// import React, { useState } from 'react'

// let id=1;

// function AddForm(props) {
//     const [input, setInput] = useState("");

//     function handleInput(e){
//         setInput(e.target.value);
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         props.onSubmit({
//             record:id,
//             msg:input
//         });
//         id++;

//         setInput('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder='測試紀錄'
//                 value={input}
//                 className=""
//                 onChange={handleInput}
//             />
//             <input
//                 type="submit"
//                 value="新增紀錄"
//             />
//         </form>
//     )
// }

// export default AddForm

