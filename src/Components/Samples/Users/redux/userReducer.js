import { USER_FETCH, USER_SAVE, USER_RESET, USER_DELETE } from "./userTypes"

const initialState = {
    act: 0,
    index: '',
    user: [{
        id: 0,
        firstName: '',
        lastName: '',
        employment: '',
        email: ''
    }]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SAVE:
            if (action.act === 0) {
                return {
                    ...state, user: [...state.user, action.payload]
                }
            }
            else {
                const idx = action.index
                const newArr = [...state.user]
                newArr[idx].firstName = action.payload.firstName
                newArr[idx].lastName = action.payload.lastName
                newArr[idx].employment = action.payload.employment
                newArr[idx].email = action.payload.email
                return {
                    state, user: newArr, act: 0, index: ''
                }
            }

        case USER_FETCH:
            return {
                ...state, index: action.index, act: action.act
            }
        case USER_RESET:
            return {
                ...state, index: '', act: 0
            }
        case USER_DELETE:
            const idx = action.payload
            var newArr = state.user
            //newArr = newArr.splice(idx,1)
            var res = newArr.filter((data, ind) => ind !== idx)
            console.log(res, 'res')
            return {
                ...state, user: res, act: 0, index: ''
            }
        default:
            return state
    }
}

export default userReducer