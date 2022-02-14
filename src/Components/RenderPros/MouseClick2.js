import React from 'react'

function MouseClick2(props) {
    const { count, incrementCount } = props
    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default MouseClick2
