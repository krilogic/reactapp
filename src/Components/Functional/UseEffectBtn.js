import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectBtn() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const[idfromButton,setIdfromButton]=useState(id)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setTitle(res.data.title)
                console.log(res)
            })
            .catch(err => console.log(err))
    },[idfromButton])

    const Submitbtn=()=>{
        setIdfromButton(id)
    }
    return (
        <>
            <input type="text" value={id} onChange={e=>{setId(e.target.value)}}></input>
            <button onClick={Submitbtn}>Submit</button>
            <div>{title}</div>
        </>
    )
}

export default UseEffectBtn
