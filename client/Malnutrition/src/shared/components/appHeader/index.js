import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppTextTranslates from '../appTextTranslate';
import BackArrow from '../../../../assets/svg/backArrowSVG';
import {appHeaderStyles} from './styles';

const AppHeader = ({onPress, canGoBack, title, backArrowValue}) => {
  return (
    <View style={appHeaderStyles.container}>
      <View style={appHeaderStyles.headerContainer}>
        <TouchableOpacity
          onPress={onPress}
          backArrowValue={backArrowValue}
          style={{paddingLeft: 20, paddingRight: 8}}>
          {backArrowValue === true ? <BackArrow /> : null}
        </TouchableOpacity>
        <Text style={appHeaderStyles.headerText}>{title}</Text>
      </View>
      <View style={appHeaderStyles.secondContainer}>
        <View style={appHeaderStyles.secondTextContainer}>
          <AppTextTranslates />
        </View>
      </View>
    </View>
  );
};

export default AppHeader;
