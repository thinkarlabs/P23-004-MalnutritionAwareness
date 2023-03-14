import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_CARD, TAB} from '../shared/constants/navigatorConstants';
import BottomTab from './BottomTab';
import WarningCardContent from '../modules/home/child/warningCardContent';
import CardContent from '../modules/home/child/cardContent';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TAB} component={BottomTab} />
      <Stack.Screen name='card' component={CardContent} />
      <Stack.Screen name={HOME_CARD.CONTENT3} component={WarningCardContent} />
    </Stack.Navigator>
  );
}
