import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'something went wrong'
            }
        default:
            return state
    }
}
function DataFetchUseReducer() {
    const [objState, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])
    return (
        <div>
            {objState.loading ? 'loading' : objState.post.title}
            {objState.error ? objState.error : null}
        </div>
    )
}

export default DataFetchUseReducer
