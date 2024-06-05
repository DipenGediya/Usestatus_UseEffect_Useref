import React, { useEffect, useState } from 'react'

const Use_effect = () => {
    let [count, setcount] = useState(0);
    let [text,setText] = useState("hello");


    useEffect(()=>{
        setInterval(()=>{
            setcount(count+1)
        },3000)
    },[text])

    return (
        <div className='container'>
            <div>{count}</div>
            <div className='my-3'>{text}</div>
            <button onClick={()=>setText("world")}>Submit</button>
        </div>
    )
}

export default Use_effect