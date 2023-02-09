import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../modules/splash';
import OnBoardingSlider1 from '../modules/onboarding/onBoardingSlider1';
import OnBoardingSlider2 from '../modules/onboarding/onBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/onBoardingSlider3';
import Login from '../modules/login';
import { LOGIN, ONBOARDINGSLIDER1, ONBOARDINGSLIDER2, ONBOARDINGSLIDER3, OTPVERIFICATION, SPLASH } from '../shared/constants/navigatorConstants';
import OTPVerification from '../modules/otpVerification';

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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showSplashScreen ? (
          <Stack.Screen name={SPLASH} component={Splash} />
        ) : null}
        <Stack.Screen name={ONBOARDINGSLIDER1} component={OnBoardingSlider1} />
        <Stack.Screen name={ONBOARDINGSLIDER2} component={OnBoardingSlider2} />
        <Stack.Screen name={ONBOARDINGSLIDER3} component={OnBoardingSlider3} />
        <Stack.Screen name={OTPVERIFICATION} component={OTPVerification} />
        <Stack.Screen name={LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
