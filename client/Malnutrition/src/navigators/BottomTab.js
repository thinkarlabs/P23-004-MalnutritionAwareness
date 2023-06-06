import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Home from '../modules/home';
import Profile from '../modules/profile';
import Track from '../modules/track';
import {
  FOCUSED_TAB_ICON,
  PLACEHOLDER_BORDER_COLOR,
  TAB_ICON,
} from '../shared/constants/colors';
import {
  ASK,
  HOME,
  PROFILE,
  TRACK,
} from '../shared/constants/navigatorConstants';
import Ask from '../modules/ask';
import HomeDefaultIcon from '../../assets/svg/icons/homeDefaultIcon';
import UserActiveIcon from '../../assets/svg/icons/userActiveIcon';
import AskDefaultIcon from '../../assets/svg/icons/askDefaultIcon';
import AskActiveIcon from '../../assets/svg/icons/askActiveIcon';
import HomeActive from '../../assets/svg/icons/homeActive';
import TrackDefault from '../../assets/svg/icons/trackDefaultIcon';
import TrackActive from '../../assets/svg/icons/trackActiveIcon';
import UserDefault from '../../assets/svg/icons/userDefaultIcon';
import { Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { height: screenHeight } = Dimensions.get('window');
  const tabBarHeight = screenHeight * 0.1;

  return (
    <Tab.Navigator
      initialRouteName={HOME}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: PLACEHOLDER_BORDER_COLOR,
          height: tabBarHeight
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              {focused ? <HomeActive /> : <HomeDefaultIcon />}
              <Text
                style={{
                  color: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                  fontSize: 16,
                  fontWeight: focused ? '700' : '400',
                  lineHeight: 24,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={TRACK}
        component={Track}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              {focused ? <TrackActive /> : <TrackDefault />}
              <Text
                style={{
                  color: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                  fontSize: 16,
                  fontWeight: focused ? '700' : '400',
                  lineHeight: 24,
                }}>
                Track
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ASK}
        component={Ask}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              {focused ? <AskActiveIcon /> : <AskDefaultIcon />}
              <Text
                style={{
                  color: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                  fontSize: 16,
                  fontWeight: focused ? '700' : '400',
                  lineHeight: 24,
                }}>
                Ask
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              {focused ? <UserActiveIcon /> : <UserDefault />}
              <Text
                style={{
                  color: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                  fontSize: 16,
                  fontWeight: focused ? '700' : '400',
                  lineHeight: 24,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
});
