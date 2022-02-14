import axios from 'axios'
import React, { Component } from 'react'

 class Mount extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          posts:[]
       }
     }
     componentDidMount(){
         axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState(this.state.posts=res.data )
                console.log(res)
            })
            .catch(err => console.log(err))

     }
     componentDidUpdate(pervPros,pervState){

     }
     
  render() {
    return (
      <div>
        <ul>
            {
               this.state.posts.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul>
      </div>
    )
  }
}

export default Mount
