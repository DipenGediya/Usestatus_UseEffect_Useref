import React, { useState } from 'react'

const Use_status = () => {
  
    let [input,setinput]= useState({})

    function handle(e) {
        setinput({...input , [e.target.name]:e.target.value})
    }

    function submit() {
        console.log(input);
    }

    return (
        <>
            <input type="text" name="firstname" onChange={handle}/>
            <input type="text" name="lastname" onChange={handle}/>
            <button onClick={submit}>submit</button>
        </>
    )
}

export default Use_status