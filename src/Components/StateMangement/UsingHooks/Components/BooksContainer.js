import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBook } from '../redux/index'

function BooksContainer() {
    const numOfBooks = useSelector(state => state.book.numOfBooks)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Number of Books - {numOfBooks}</h2>
            <button onClick={() => dispatch(buyBook())}>Buy Books(5)</button>
        </>
    )
}

export default BooksContainer
