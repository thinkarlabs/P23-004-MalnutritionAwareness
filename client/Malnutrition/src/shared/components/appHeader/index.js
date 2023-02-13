import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {OTPVERIFICATION} from '../../constants/navigatorConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppTextTranslates from '../appTextTranslate';

const AppHeader = ({navigation, canGoBack, title}) => {
  if (canGoBack) {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          height: 56,
        }}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(OTPVERIFICATION)}>
            <AntDesign name="arrowright" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 700}}>{title}</Text>
        </View>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <AppTextTranslates />
        </View>
      </View>
    );
  }
};

export default AppHeader;
