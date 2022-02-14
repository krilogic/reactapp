import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
                setError('error form server')
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.length ?
                        posts.map(post => <li key={post.id}>{post.title}</li>)
                        : null
                }
                {
                    error.length ? <li>{error}</li> : null
                }
            </ul>
        </div>
    )
}

export default UseEffect
