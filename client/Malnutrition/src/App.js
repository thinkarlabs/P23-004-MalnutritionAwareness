/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import Login from './modules/login';
import Splash from './modules/splash';
import { AppStackNavigator } from './navigators/AppStackNavigatior';
import {configureStore} from './redux/store';

const {store} = configureStore();

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      {/* <SafeAreaView
      // style={backgroundStyle}
      > */}
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <Splash /> */}
        <AppStackNavigator />
      {/* </SafeAreaView> */}
    </Provider>
  );
}

export default App;