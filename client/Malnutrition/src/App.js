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
import {configureStore} from './redux/store';

const {store} = configureStore();

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <SafeAreaView
      // style={backgroundStyle}
      >
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
