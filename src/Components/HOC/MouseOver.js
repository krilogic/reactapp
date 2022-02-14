import React from 'react'
import HigherOrder from './HigherOrder'

function MouseOver(props) {
    const{count,increment} = props
  return (
    <div>
      <h2 onMouseOver={increment}>{props.name} Hovered {count} times</h2>
    </div>
  )
}

export default HigherOrder(MouseOver)
