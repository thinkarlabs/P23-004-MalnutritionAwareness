import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {onBoardingScreenStyles} from './styles';
import {
  BACK,
  ONBOARDSCREEN3_CONTENT,
  ONBOARDSCREEN3_TITLE,
} from '../../shared/constants/constants';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  ONBOARDINGSLIDER1,
  CREATEACCOUNT,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide3 from '../../../assets/svg/onboardingSlide3SVG';

const OnBoardingSlider3 = ({navigation}) => {
  return (
    <SafeAreaView style={onBoardingScreenStyles.yellowContainer}>
      <View style={onBoardingScreenStyles.container}>
        <View style={onBoardingScreenStyles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ONBOARDINGSLIDER1);
            }}>
            <Text style={onBoardingScreenStyles.headerText}>{BACK}</Text>
          </TouchableOpacity>
          <AppTextTranslates />
        </View>
        <View style={onBoardingScreenStyles.headerImage}>
          <OnboardingSlide3 />
        </View>
        <View style={onBoardingScreenStyles.contentContainer}>
          <Text style={onBoardingScreenStyles.contentTitle}>{ONBOARDSCREEN3_TITLE}</Text>
          <Text style={onBoardingScreenStyles.contentBody}>{ONBOARDSCREEN3_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={onBoardingScreenStyles.circleContainer}>
        <NextScreenArrow
          onPress={() => {
            navigation.navigate(CREATEACCOUNT);
          }}
          progress={1}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSlider3;
