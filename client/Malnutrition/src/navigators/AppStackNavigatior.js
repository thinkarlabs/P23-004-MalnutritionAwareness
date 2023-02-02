import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Overview from "../modules/overview";
import Splash from "../modules/splash";

const Stack = createStackNavigator();

export function AppStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Overview" component={Overview} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}