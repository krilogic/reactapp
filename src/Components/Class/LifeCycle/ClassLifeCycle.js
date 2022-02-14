import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

class ClassLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Gopi Clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title = `kris Clicked ${this.state.count} times`
    }

    clickHander = () => {
        // this.setState({
        //     count: this.state.count+1
        // })
        this.setState((pervState) => ({ count: pervState.count + 1 }))
    }

    render() {
        return (
            <div>
                {/* <button onClick={() => { this.setState({ count: this.state.count + 1 })}}>
                Clicked Button {this.state.count} times
                </button> */}
                <button onClick={this.clickHander}>
                    Clicked Button {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassLifeCycle
