import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppTextTranslates from '../appTextTranslate';
import BackArrow from '../../../../assets/svg/backArrowSVG';
import {appHeaderStyles} from './styles';
import {BACK} from '../../constants/constants';

const AppHeader = ({
  onPress,
  title,
  subTitle,
  backArrowValue,
  onBoarding,
  backText,
  onBackPress,
}) => {
  return (
    <View style={appHeaderStyles.container}>
      <View style={appHeaderStyles.headerContainer}>
        {backArrowValue ? (
          <TouchableOpacity
            onPress={onPress}
            backArrowValue={backArrowValue}
            style={appHeaderStyles.backIcon}>
            <BackArrow />
          </TouchableOpacity>
        ) : null}
        <Text style={appHeaderStyles.headerText}>{title}</Text>
        <Text style={appHeaderStyles.headerSubText}>{subTitle}</Text>
      </View>
      <View
        style={
          onBoarding
            ? appHeaderStyles.onBoarding
            : appHeaderStyles.secondContainer
        }>
        <AppTextTranslates />
        {backText ? (
          <Text style={appHeaderStyles.backText} onPress={onBackPress}>
            {BACK}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default AppHeader;
