import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSave } from '../redux/index'
import { userReset } from '../redux/userActions'

function UserSave() {
    const rowInfo = useSelector(state => state.user)
    let act = useSelector(state => state.act)
    let index = useSelector(state => state.index)

    var selectedUser = rowInfo[index]

    const initialState_Save = {
        firstName: "",
        lastName: "",
        employment: "",
        email: ""
    };

    const [edit, SetEdit] = useState('')

    useEffect(() => {
        if (act === 1) {
            SetEdit({
                firstName: selectedUser.firstName,
                lastName: selectedUser.lastName,
                employment: selectedUser.employment,
                email: selectedUser.email
            })
        } else {
            SetEdit({
                //initialState_Save
            })
            console.log(initialState_Save, 'initialState_Save')
        }
    }, [act, index])

    const handleChange = e => {
        const { name, value } = e.target;
        SetEdit(edit => ({ ...edit, [name]: value }))
    }

    const onReset = () => {
        dispatch(userReset())
        SetEdit({
            ...initialState_Save
        })
    }

    const onSubmit = () => {
        if (act === 0) {
            dispatch(userSave(edit, act, index))
            SetEdit({
                ...initialState_Save
            })
        }
        else {
            dispatch(userSave(edit, act, index))
            SetEdit({
                ...initialState_Save
            })
        }
    }

    const dispatch = useDispatch()
    return (
        <>
            <h2>User Details</h2>
            <div>
                FirstName:<input name='firstName' value={edit.firstName} onChange={handleChange}></input><br />
                LastName:<input name='lastName' value={edit.lastName} onChange={handleChange}></input><br />
                Employment:<input name='employment' value={edit.employment} onChange={handleChange}></input><br />
                Email:<input name='email' value={edit.email} onChange={handleChange}></input><br />
                <button onClick={() => { onSubmit() }}>Submit</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </>
    )
}

export default UserSave
