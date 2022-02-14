import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSave, userFetch, userDelete } from '../redux/index'

function UserFetch() {
    const user = useSelector(state => state.user)
    let { act, index } = useSelector(state => state)
    var selectedUser = user[index]

    let [flag, SetFlag] = useState(act)
    let [indval, SetIndval] = useState(index)


    useEffect(() => {

    })
    const dispatch = useDispatch()

    const tableStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid black',
    };
    const border = {
        border: '1px solid black'
    }

    const onEdit = (i) => {
        let rowInfo = user[i]
        SetFlag(flag = 1)
        SetIndval(indval = i)
        dispatch(userFetch(user, flag, indval))
    }

    return (
        <>
            <h2>List of Users</h2>
            {
                user.length !== 1 ?
                    (<table style={tableStyle}>
                        <tr>
                            <th><td>FirstName</td></th>
                            <th><td>LastName</td></th>
                            <th><td>Employment</td></th>
                            <th><td>Email</td></th>
                        </tr>
                        {user.map((u, i) => (
                            <tr>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.employment}</td>
                                <td>{u.email}</td>
                                {(u.firstName, u.lastName, u.employment, u.email) ?
                                    <td><button onClick={() => { onEdit(i) }}>Edit</button>
                                        <button onClick={() => { dispatch(userDelete(i)) }}>Delete</button></td> : ''}
                            </tr>))
                        }
                    </table >)
                    :
                    <h4 style={{ color: 'Red' }}>No Users found...</h4>
            }

        </>
    )
}

export default UserFetch
