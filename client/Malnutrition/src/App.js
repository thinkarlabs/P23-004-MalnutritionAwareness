import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {AppStackNavigator} from './navigators/AppStackNavigator';
import { RootNavigation } from './navigators/route';
import {configureStore} from './redux/store';

const {store} = configureStore();

function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      {/* <AppStackNavigator /> */}
      <NavigationContainer>
      <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
