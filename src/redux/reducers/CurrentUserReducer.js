export const CURRENT_USER = 'CURRENT_USER'
export const RESET_USER = 'RESET_USER'

const initialState = {
    isLoggedIn: false,
    currentUser: {},
    authToken: null,
    favourite: [],
}

const CurrentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case RESET_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state
    }
}

export default CurrentUserReducer