import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { AppStackNavigator } from './navigators/AppStackNavigator';
import {configureStore} from './redux/store';

const {store} = configureStore();

function App() {
  return (
    <Provider store={store}>
        <StatusBar/>
          <AppStackNavigator />
    </Provider>
  );
}

export default App;
