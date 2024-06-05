import React, { useRef } from 'react'

const Use_ref = () => {

    let name = useRef()
    let email = useRef()


    function submit(e) {
        let data = {
            name: name.current.value,
            email: email.current.value
        }

        console.log(data);
    }
    return (
        <>
            <input type="text" ref={name} />
            <input type="text" ref={email} />
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default Use_ref