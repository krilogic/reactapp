import { USER_SAVE, USER_FETCH, USER_RESET, USER_DELETE } from "./userTypes"

export const userSave = (user, act = 0, index = '') => {
    return {
        type: USER_SAVE,
        payload: user, act, index
    }
}

export const userFetch = (user, act = 0, index = '') => {
    return {
        type: USER_FETCH,
        payload: user, act, index
    }
}

export const userReset = () => {
    return {
        type: USER_RESET
    }
}

export const userDelete = (index = '') => {
    return {
        type: USER_DELETE,
        payload: index
    }
}
