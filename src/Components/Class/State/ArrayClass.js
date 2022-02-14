import React, { Component } from 'react'

export class ArrayClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [{ Id: 0, value: 1 }]
        }
    }

    AddItems = () => {
        this.setState({
            items: [...this.state.items, {
                Id: this.state.items.length,
                value: Math.floor(Math.random() * 10) + 1
            }]
        })
            // ,() => {
            //     console.log(this.state.items)
            // }
    }
    render() {
        return (
            <div>
                <button onClick={this.AddItems}>Add Item</button>
                {console.log(this.state.items)}
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.Id}>{item.value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ArrayClass
