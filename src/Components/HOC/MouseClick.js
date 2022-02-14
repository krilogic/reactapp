import React from 'react'
import HigherOrder from './HigherOrder'

function MouseClick(props) {
    const { count, increment, name } = props
    return (
        <div>
            <button onClick={increment}>{name} Clicked {count} times</button>
        </div>
    )
}

export default HigherOrder(MouseClick)
