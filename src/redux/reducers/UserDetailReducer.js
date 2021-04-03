export const USER_DETAILS = 'USER_DETAILS'

const initialState = {}

const SwitchAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAILS:
            return { ...state, ...action.payload }
    }
    return state
}

export default SwitchAccountReducer