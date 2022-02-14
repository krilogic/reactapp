import axios from 'axios'
import React, { Component } from 'react'

export class HttpPost extends Component {
constructor(props) {
  super(props)

  this.state = {
     userId:'',
     title:'',
     body:''
  }
}
ontextChanged = e =>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
submitForm = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
}

  render() {
      const{userId,title,body} = this.state
    return (
      <div>
        <form onSubmit={this.submitForm}>
            <input type="text" name="userId" value={userId} onChange={this.ontextChanged}/>
            <input type="text" name="title" value={title} onChange={this.ontextChanged}/>
            <input type="text" name="body" value={body} onChange={this.ontextChanged}/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default HttpPost
