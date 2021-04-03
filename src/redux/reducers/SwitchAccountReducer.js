export const SWITCH_ACCOUNT = 'SWITCH_ACCOUNT'

const initialState = true

const SwitchAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_ACCOUNT:
            return action.payload
    }
    return state
}

export default SwitchAccountReducer