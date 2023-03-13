import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { AppStackNavigator } from './AppStackNavigator';
import { HomeStackNavigator } from './HomeStackNavigator';

export const RootNavigation = () => {
    const accessToken = useSelector(state => state.homeScreen.accessToken);
    console.log(accessToken, 'tokendata');

    return (
        <View>
        {accessToken == null || accessToken == undefined || accessToken == '' ? (
        <AppStackNavigator />
      ) : (
        <HomeStackNavigator />
      )}
        </View>
    )
}