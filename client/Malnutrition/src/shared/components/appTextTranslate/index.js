import {View, Text} from 'react-native';
import React from 'react';
import {appTextTranslateStyles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {ENGLISH} from '../../constants/constants';

const AppTextTranslates = () => {
  return (
    <View style={appTextTranslateStyles.headerContainer}>
      <View style={appTextTranslateStyles.languageIcon}>
        <Entypo name="triangle-down" />
      </View>
      <Text style={appTextTranslateStyles.languageText}>{ENGLISH}</Text>
    </View>
  );
};

export default AppTextTranslates;
