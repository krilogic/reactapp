import React, { useEffect, useState } from 'react'

function FunctionLifecycle() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    return (
        <div>
            {/* <button onClick={()=>setCount(count+1)}>Clicked Button {count} times</button> */}
            <button onClick={()=>setCount(pervCount=>pervCount+1)}>
            
            Clicked Button {count} times
            </button>
        </div>
    )
}

export default FunctionLifecycle
