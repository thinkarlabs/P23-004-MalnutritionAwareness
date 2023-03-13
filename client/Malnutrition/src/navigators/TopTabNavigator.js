import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Timeline from '../modules/track/trackHealthScreen/Timeline';
import TrackHealth from '../modules/track/trackHealthScreen/TrackHealth';
import {BLACK} from '../shared/constants/colors';
import {TRACK_HEALTH} from '../shared/constants/navigatorConstants';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#616568',
        tabBarActiveTintColor: '#111112',
        tabBarIndicatorStyle: {
          backgroundColor: BLACK,
          height: 2,
        },
        tabBarLabel: ({focused}) => {
          return (
            <View style={{width: 200, alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: focused ? '600' : '400',
                  fontSize: 18,
                  lineHeight: 22,
                }}>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name={TRACK_HEALTH.CONTENT1} component={TrackHealth} />
      <Tab.Screen name={TRACK_HEALTH.CONTENT2} component={Timeline} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabBarText: {
    fontSize: 18,
    lineHeight: 22,
    color: 'red',
  },
});
