import React, { useState } from 'react'

function FunctionState() {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <>
      <form>
        <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
        <br></br>
        <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
        <br></br>
        <h2>Enter values are - {JSON.stringify(name)}</h2>
      </form>
    </>
  )
}

export default FunctionState
