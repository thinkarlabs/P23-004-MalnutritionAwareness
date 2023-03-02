import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../modules/splash';
import OnBoardingSlider1 from '../modules/onboarding/onBoardingSlider1';
import OnBoardingSlider2 from '../modules/onboarding/onBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/onBoardingSlider3';
import {
  CHILDINFO_SCREEN,
  CREATEACCOUNT,
  LACTATINGMOTHER_SCREEN,
  ONBOARDINGSLIDER1,
  ONBOARDINGSLIDER2,
  ONBOARDINGSLIDER3,
  PREGNANTWOMAN_SCREEN,
  SPLASH,
} from '../shared/constants/navigatorConstants';
import {WHITE} from '../shared/constants/colors';
import CreateAccount from '../modules/createAccount';
import pregnantWomanInfo from '../modules/createAccount/beneficiaryInfoScreen/pregnantWomanInfo';
import lactatingMotherInfo from '../modules/createAccount/beneficiaryInfoScreen/lactatingMotherInfo';
import childInfo from '../modules/createAccount/beneficiaryInfoScreen/childInfo';

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
          component={pregnantWomanInfo}
        />
        <Stack.Screen
          name={LACTATINGMOTHER_SCREEN}
          component={lactatingMotherInfo}
        />
        <Stack.Screen name={CHILDINFO_SCREEN} component={childInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
