import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../modules/splash';
import {
  CHILDINFO_SCREEN,
  CREATEACCOUNT,
  HOME,
  HOME_CARD,
  LOGIN,
  ONBOARDINGSLIDER1,
  ONBOARDINGSLIDER2,
  ONBOARDINGSLIDER3,
  OTPVERIFICATION,
  PREGNANTWOMAN_SCREEN,
  SPLASH,
  TAB,
} from '../shared/constants/navigatorConstants';
import {WHITE} from '../shared/constants/colors';
import CreateAccount from '../modules/createAccount';
import OTPVerification from '../modules/otpVerification';
import PregnantWomanInfo from '../modules/createAccount/beneficiaryInfoScreen/PregnantWomanInfo';
import OnBoardingSlider1 from '../modules/onboarding/OnBoardingSlider1';
import OnBoardingSlider2 from '../modules/onboarding/OnBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/OnBoardingSlider3';
import Login from '../modules/login';
import Home from '../modules/home';
import BottomTab from './BottomTab';
import ChildInfo from '../modules/createAccount/beneficiaryInfoScreen/ChildInfo';
import ChildCardContent from '../modules/home/homeCardContent/ChildCardContent';
import ParentCardContent from '../modules/home/homeCardContent/ParentCardContent';
import WarningCardContent from '../modules/home/homeCardContent/WarningCardContent';

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: WHITE},
        }}>
        {/* {showSplashScreen ? (
          <Stack.Screen name={SPLASH} component={Splash} />
        ) : null}
        <Stack.Screen name={ONBOARDINGSLIDER1} component={OnBoardingSlider1} />
        <Stack.Screen name={ONBOARDINGSLIDER2} component={OnBoardingSlider2} />
        <Stack.Screen name={ONBOARDINGSLIDER3} component={OnBoardingSlider3} />
        <Stack.Screen name={CREATEACCOUNT} component={CreateAccount} />
        <Stack.Screen
          name={PREGNANTWOMAN_SCREEN}
          component={PregnantWomanInfo}
        />
        <Stack.Screen name={CHILDINFO_SCREEN} component={ChildInfo} />
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={OTPVERIFICATION} component={OTPVerification} /> */}
        <Stack.Screen name={TAB} component={BottomTab} />
        <Stack.Screen name={HOME_CARD.CONTENT1} component={ChildCardContent} />
        <Stack.Screen name={HOME_CARD.CONTENT2} component={ParentCardContent} />
        <Stack.Screen
          name={HOME_CARD.CONTENT3}
          component={WarningCardContent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
