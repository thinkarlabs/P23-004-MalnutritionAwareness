import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../modules/onboarding";
import Splash from "../modules/splash";

const Stack = createStackNavigator();

export function AppStackNavigator() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false);
        },300000)
    },[])
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                {
                    showSplashScreen ? <Stack.Screen name="Splash" component={Splash} />
                        : null
                }
                <Stack.Screen name="Onboarding" component={Onboarding} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}