import React, { Component } from 'react'

const HigherOrder = WrappedComponent => {
    class HigherOrder extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return (
                <div>
                    <WrappedComponent
                        count={this.state.count}
                        increment={this.incrementCount}
                         {...this.props}/>
                </div>
            )
        }
    }
    return HigherOrder
}

export default HigherOrder
