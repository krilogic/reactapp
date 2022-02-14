import React, { useReducer } from 'react'

const initialState = { firstCount: 0, secondCount: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCount: state.firstCount + action.value }
        case 'decrement1':
            return { ...state, firstCount: state.firstCount - action.value }
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value }
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ObjectReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>Counter1: {count.firstCount}</div>
            <div>Counter2: {count.secondCount}</div>
            <div><button onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment1</button>
                <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>Decrement1</button>
                <button onClick={() => dispatch({ type: 'increment1', value: 5 })}>Increment1By5</button>
                <button onClick={() => dispatch({ type: 'decrement1', value: 5 })}>Decrement1By5</button></div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement2</button>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment2By5</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement2By5</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </>
    )
}

export default ObjectReducer
