import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../modules/onboarding';
import Splash from '../modules/splash';
import CreateAccount from '../modules/createAccount';
import OnBoardingSlider1 from '../modules/onboarding/onBoardingSlider1';
import OnBoardingSlider2 from '../modules/onboarding/onBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/onBoardingSlider3';
import Login from '../modules/login';
import {
  LOGIN,
  ONBOARDINGSLIDER1,
  ONBOARDINGSLIDER2,
  ONBOARDINGSLIDER3,
  SPLASH,
  CREATE_ACCOUNT,
} from '../shared/constants/navigatorConstants';

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
          cardStyle: {backgroundColor: '#fff'},
        }}>
        {showSplashScreen ? (
          <Stack.Screen name={SPLASH} component={Splash} />
        ) : null}
        <Stack.Screen name={ONBOARDINGSLIDER1} component={OnBoardingSlider1} />
        <Stack.Screen name={ONBOARDINGSLIDER2} component={OnBoardingSlider2} />
        <Stack.Screen name={ONBOARDINGSLIDER3} component={OnBoardingSlider3} />
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={CREATE_ACCOUNT} component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
