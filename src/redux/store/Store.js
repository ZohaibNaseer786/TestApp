import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'

import rootReducer from '../RootReducer'

const middlewares = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)

export default { store, persistStore }




