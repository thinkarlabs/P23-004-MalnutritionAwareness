import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, StyleSheet} from 'react-native';
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

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: PLACEHOLDER_BORDER_COLOR,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png',
                }}
                style={{
                  height: 17,
                  width: 12,
                  tintColor: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                }}
              />
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
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png',
                }}
                style={{
                  height: 17,
                  width: 12,
                  tintColor: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                }}
              />
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
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png',
                }}
                style={{
                  height: 17,
                  width: 12,
                  tintColor: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                }}
              />
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
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png',
                }}
                style={{
                  height: 17,
                  width: 12,
                  tintColor: focused ? FOCUSED_TAB_ICON : TAB_ICON,
                }}
              />
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
