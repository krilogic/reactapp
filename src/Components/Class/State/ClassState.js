import React, { Component } from 'react'

export class ClassState extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
             firstName:'',
             lastName:''
      }
    }

    changeHandler = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
  render() {
    return (
        <>
        <form>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.changeHandler } />
          <br></br>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.changeHandler} />
          <br></br>
          <h2>Enter values are - {JSON.stringify(this.state)}</h2>
        </form>
      </>
    )
  }
}

export default ClassState
