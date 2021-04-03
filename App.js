import React from 'react';
import {StatusBar} from 'react-native';
import RootStack from './src/screens/navigation/RootStackNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <PersistGate persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
