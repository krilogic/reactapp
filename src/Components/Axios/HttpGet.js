import axios from 'axios'
import React, { Component } from 'react'

export class HttpGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: 'Error from Server' })
            })
    }

    render() {
        const { posts, error } = this.state
        return (
            <div>
                List of Post
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.id}.{post.title}</div>) :
                        null
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default HttpGet
