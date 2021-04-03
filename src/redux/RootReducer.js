import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import SwitchAccountReducer from './reducers/SwitchAccountReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['switch_user'],
};
const rootReducer = combineReducers({
  switch_user: SwitchAccountReducer,
});
export default persistReducer(persistConfig, rootReducer);
