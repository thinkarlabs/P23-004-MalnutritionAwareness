import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAB} from '../shared/constants/navigatorConstants';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TAB} component={BottomTab} />
    </Stack.Navigator>
  );
}
