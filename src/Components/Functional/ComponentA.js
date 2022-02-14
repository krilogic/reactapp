import React, { useReducer } from 'react'
import ComponentC from './ComponentC';
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';

export const CountContext = React.createContext()
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ComponentA() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <>
                <div>Count - {count}</div>
                <ComponentB></ComponentB>
                <ComponentC></ComponentC>
                <ComponentD></ComponentD>
            </>
        </CountContext.Provider>
    )
}

export default ComponentA
