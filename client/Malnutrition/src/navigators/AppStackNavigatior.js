import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingSlider1 from "../modules/onboarding/onBoardingSlider1";
import Splash from "../modules/splash";
import OnBoardingSlider2 from '../modules/onboarding/onBoardingSlider2';
import OnBoardingSlider3 from '../modules/onboarding/onBoardingSlider3';

const Stack = createStackNavigator();

export function AppStackNavigator() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false);
        },3000)
    },[])
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                {
                    showSplashScreen ? <Stack.Screen name="Splash" component={Splash} />
                        : null
                }
                <Stack.Screen name="OnboardingSlider1" component={OnBoardingSlider1} />
                <Stack.Screen name="OnboardingSlider2" component={OnBoardingSlider2} />
                <Stack.Screen name="OnboardingSlider3" component={OnBoardingSlider3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}