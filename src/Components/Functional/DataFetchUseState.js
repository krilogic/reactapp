import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchUseState() {
    const [loading, SetLoading] = useState(true)
    const [error, SetError] = useState('')
    const [post, SetPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log(res)
                setInterval(() => {
                    SetLoading(false)
                }, 2000);
                SetPost(res.data)
                SetError('')
            })
            .catch(err => {
                console.log(err)
                SetLoading(false)
                SetPost({})
                setInterval(() => {
                    SetError('error form server')
                }, 1000);
            })
    }, [])

    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchUseState
