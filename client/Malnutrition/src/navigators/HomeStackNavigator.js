import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CHILDINFO_SCREEN,
  CHILD_CARD_CONTENT,
  CREATEACCOUNT,
  HOME_CARD,
  LOGIN,
  OTPVERIFICATION,
  PREGNANTWOMAN_SCREEN,
  PREGNANT_WOMAN_CARD_CONTENT,
  TAB,
} from '../shared/constants/navigatorConstants';
import BottomTab from './BottomTab';
import WarningCardContent from '../modules/home/child/warningCardContent';
import ChildCardContent from '../modules/home/child/childCardContent';
import PregnantWomanCardContent from '../modules/home/pregnantWoman/pregnantWomanCardContent';
import Login from '../modules/login';
import {WHITE} from '../shared/constants/colors';
import CreateAccount from '../modules/createAccount';
import PregnantWomanInfo from '../modules/createAccount/beneficiaryInfoScreen/PregnantWomanInfo';
import ChildInfo from '../modules/createAccount/beneficiaryInfoScreen/ChildInfo';
import OTPVerification from '../modules/otpVerification';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: WHITE},
        gestureEnabled: false,
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
      <Stack.Screen name={CREATEACCOUNT} component={CreateAccount} />
      <Stack.Screen name={PREGNANTWOMAN_SCREEN} component={PregnantWomanInfo} />
      <Stack.Screen name={CHILDINFO_SCREEN} component={ChildInfo} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={OTPVERIFICATION} component={OTPVerification} />
    </Stack.Navigator>
  );
}
