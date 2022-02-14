import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentF() {
    return (
        <div>
            <UserConsumer>
                {
                    (user) => { return <h1>Hello {user}</h1> }
                }
            </UserConsumer>
            Component F
        </div>
    )
}

export default ComponentF
