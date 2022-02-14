import React from 'react'

function MouseOver2(props) {
    const { count, incrementCount } = props
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hoverd {count} times</h2>
        </div>
    )
}

export default MouseOver2
