import axios from 'axios'
import React, { Component } from 'react'

export class MountBtn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 1,
            title: '',
            idforButton: ''
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
            .then(res => {
                this.setState({ title: res.data.title })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    componentDidUpdate(pervPros, pervState) {
        if (pervState.idforButton !== this.state.idforButton) {
            console.log('componentDidUpdate executed...')
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
                .then(res => {
                    this.setState({ title: res.data.title })
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
    }
    changeHandler = e => {
        this.setState({
            id: e.target.value
        })
    }
    onSubmit = () => {
        this.setState({
            idforButton: this.state.id
        })
    }
    render() {
        return (
            <>
                <input type="text" value={this.state.id} onChange={this.changeHandler}></input>
                <button onClick={this.onSubmit}>Submit</button>
                <div>
                    {this.state.title}
                </div>
            </>
        )
    }
}

export default MountBtn
