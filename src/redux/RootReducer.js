import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import SwitchAccountReducer from './reducers/SwitchAccountReducer'
import UserDetailReducer from './reducers/UserDetailReducer'
import CurrentUserReducer from './reducers/CurrentUserReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'switch_user',
        'user_details',
        'current_user'
    ],
};
const rootReducer = combineReducers({
    switch_user: SwitchAccountReducer,
    user_details: UserDetailReducer,
    current_user: CurrentUserReducer,
});
export default persistReducer(persistConfig, rootReducer);
