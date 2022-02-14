import React from 'react'
import ComponentE from './ComponentE'
import { UserProvider } from './UserContext'

function ComponentC() {
    return (
        <div>
            <UserProvider value="Genius krishna">
                <ComponentE />
            </UserProvider>
        </div>
    )
}

export default ComponentC
