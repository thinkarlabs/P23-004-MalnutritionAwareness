import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../modules/splash';
import {
  CHILDINFO_SCREEN,
  CHILD_CARD_CONTENT,
  CREATEACCOUNT,
  HOME_CARD,
  LOGIN,
  ONBOARDINGSLIDER1,
  ONBOARDINGSLIDER2,
  ONBOARDINGSLIDER3,
  OTPVERIFICATION,
  PREGNANTWOMAN_SCREEN,
  PREGNANT_WOMAN_CARD_CONTENT,
  SPLASH,
  TAB,
  TRACK_HEALTH,
} from '../shared/constants/navigatorConstants';
import {WHITE} from '../shared/constants/colors';
import CreateAccount from '../modules/createAccount';
import OTPVerification from '../modules/otpVerification';
import PregnantWomanInfo from '../modules/createAccount/beneficiaryInfoScreen/PregnantWomanInfo';
import OnBoardingSlider1 from '../modules/onboarding/OnBoardingSlider1';
import OnBoardingSlider2 from '../modules/onboarding/OnBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/OnBoardingSlider3';
import Login from '../modules/login';
import BottomTab from './BottomTab';
import ChildInfo from '../modules/createAccount/beneficiaryInfoScreen/ChildInfo';
import PregnantWomanCardContent from '../modules/home/pregnantWoman/pregnantWomanCardContent';
import ChildCardContent from '../modules/home/child/childCardContent';
import WarningCardContent from '../modules/home/child/warningCardContent';
import TrackHealth from '../modules/track/trackHealthScreen/trackHealth';

const Stack = createStackNavigator();

export function AppStackNavigator() {
  // Splash screen Logic
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: WHITE},
        gestureEnabled: false,
      }}>
      {showSplashScreen ? (
        <Stack.Screen name={SPLASH} component={Splash} />
      ) : null}
      <Stack.Screen name={ONBOARDINGSLIDER1} component={OnBoardingSlider1} />
      <Stack.Screen name={ONBOARDINGSLIDER2} component={OnBoardingSlider2} />
      <Stack.Screen name={ONBOARDINGSLIDER3} component={OnBoardingSlider3} />
      <Stack.Screen name={CREATEACCOUNT} component={CreateAccount} />
      <Stack.Screen name={PREGNANTWOMAN_SCREEN} component={PregnantWomanInfo} />
      <Stack.Screen name={CHILDINFO_SCREEN} component={ChildInfo} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={OTPVERIFICATION} component={OTPVerification} />
      <Stack.Screen name={TAB} component={BottomTab} />
      <Stack.Screen
        name={PREGNANT_WOMAN_CARD_CONTENT}
        component={PregnantWomanCardContent}
      />
      <Stack.Screen name={CHILD_CARD_CONTENT} component={ChildCardContent} />
      <Stack.Screen
        name={HOME_CARD.WARNING_CARD}
        component={WarningCardContent}
      />
      <Stack.Screen name={TRACK_HEALTH.TRACK_HEALTH} component={TrackHealth} />
    </Stack.Navigator>
  );
}
