import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {AppStackNavigator} from './navigators/AppStackNavigator';
import { RootNavigation } from './navigators/route';
import {configureStore} from './redux/store';

const {store} = configureStore();

function App() {
  LogBox.ignoreLogs(['Warning: ...']);
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
