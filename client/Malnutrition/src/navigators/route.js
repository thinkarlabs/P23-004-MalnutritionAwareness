import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {WHITE} from '../shared/constants/colors';
import {ASYNC_CONSTANTS} from '../shared/constants/constants';
import {AppStackNavigator} from './AppStackNavigator';
import {HomeStackNavigator} from './HomeStackNavigator';

export const RootNavigation = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const token = await AsyncStorage.getItem(ASYNC_CONSTANTS.TOKEN);
    setAccessToken(token);
  };

  return (
    <View style={styles.container}>
      {accessToken == null ||
      accessToken === undefined ||
      accessToken === '' ? (
        <AppStackNavigator />
      ) : (
        <HomeStackNavigator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});
