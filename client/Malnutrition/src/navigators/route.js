import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { ASYNC_CONSTANTS } from '../shared/constants/constants';
import {AppStackNavigator} from './AppStackNavigator';
import {HomeStackNavigator} from './HomeStackNavigator';

export const RootNavigation = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(async() => {
    const token = await AsyncStorage.getItem('TOKEN');
    setAccessToken(token);
  }, [])
  

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {accessToken == null || accessToken == undefined || accessToken == '' ? (
        <AppStackNavigator />
      ) : (
        <HomeStackNavigator />
      )}
    </View>
  );
};
