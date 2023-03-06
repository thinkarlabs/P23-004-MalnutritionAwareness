import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../modules/splash';
import {
  CHILDINFO_SCREEN,
  CREATEACCOUNT,
  HOME,
  LACTATINGMOTHER_SCREEN,
  ONBOARDINGSLIDER1,
  ONBOARDINGSLIDER2,
  ONBOARDINGSLIDER3,
  OTPVERIFICATION,
  PREGNANTWOMAN_SCREEN,
  SPLASH,
} from '../shared/constants/navigatorConstants';
import {WHITE} from '../shared/constants/colors';
import CreateAccount from '../modules/createAccount';
import OTPVerification from '../modules/otpVerification';
import ChildInfo from '../modules/createAccount/beneficiaryInfoScreen/ChildInfo';
import LactatingMotherInfo from '../modules/createAccount/beneficiaryInfoScreen/LactatingMotherInfo';
import PregnantWomanInfo from '../modules/createAccount/beneficiaryInfoScreen/PregnantWomanInfo';
import OnBoardingSlider1 from '../modules/onboarding/OnBoardingSlider1';
import OnBoardingSlider2 from '../modules/onboarding/OnBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/OnBoardingSlider3';
import Home from '../modules/home';

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
        {showSplashScreen ? (
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
        <Stack.Screen
          name={LACTATINGMOTHER_SCREEN}
          component={LactatingMotherInfo}
        />
        <Stack.Screen name={CHILDINFO_SCREEN} component={ChildInfo} />
        <Stack.Screen name={OTPVERIFICATION} component={OTPVerification} />
        <Stack.Screen name={HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
