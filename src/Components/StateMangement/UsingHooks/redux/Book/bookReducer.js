import { BUY_BOOK } from "./bookTypes"

const initialState = {
    numOfBooks: 50
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state, numOfBooks: state.numOfBooks - 5
            }
        default:
            return state
    }
}

export default bookReducer