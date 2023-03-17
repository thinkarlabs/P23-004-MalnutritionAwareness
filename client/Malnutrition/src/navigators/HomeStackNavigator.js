import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CHILD_CARD_CONTENT,
  HOME_CARD,
  PREGNANT_WOMAN_CARD_CONTENT,
  TAB,
} from '../shared/constants/navigatorConstants';
import BottomTab from './BottomTab';
import WarningCardContent from '../modules/home/child/warningCardContent';
import ChildCardContent from '../modules/home/child/childCardContent';
import PregnantWomanCardContent from '../modules/home/pregnantWoman/pregnantWomanCardContent';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TAB} component={BottomTab} />
      <Stack.Screen name={CHILD_CARD_CONTENT} component={ChildCardContent} />
      <Stack.Screen
        name={PREGNANT_WOMAN_CARD_CONTENT}
        component={PregnantWomanCardContent}
      />
      <Stack.Screen
        name={HOME_CARD.WARNING_CARD}
        component={WarningCardContent}
      />
    </Stack.Navigator>
  );
}
