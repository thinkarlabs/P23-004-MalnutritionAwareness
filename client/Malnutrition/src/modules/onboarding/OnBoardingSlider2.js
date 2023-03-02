import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {onBoardingScreenStyles} from './styles';
import {
  ONBOARDSCREEN2_CONTENT,
  ONBOARDSCREEN2_TITLE,
  SKIP,
} from '../../shared/constants/constants';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  CREATEACCOUNT,
  ONBOARDINGSLIDER3,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide2 from '../../../assets/svg/onboardingSlide2SVG';

const OnBoardingSlider2 = ({navigation}) => {
  return (
    <SafeAreaView style={onBoardingScreenStyles.greenContainer}>
      <View style={onBoardingScreenStyles.container}>
        <View style={onBoardingScreenStyles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(CREATEACCOUNT);
            }}>
            <Text style={onBoardingScreenStyles.headerText}>{SKIP}</Text>
          </TouchableOpacity>
          {/* Re-use component for text translation */}
          <AppTextTranslates />
        </View>
        <View style={onBoardingScreenStyles.headerImage2}>
          <OnboardingSlide2 />
        </View>
        <View style={onBoardingScreenStyles.contentContainer}>
          <Text style={onBoardingScreenStyles.contentTitle}>{ONBOARDSCREEN2_TITLE}</Text>
          <Text style={onBoardingScreenStyles.contentBody}>{ONBOARDSCREEN2_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={onBoardingScreenStyles.circleContainer}>
        <NextScreenArrow
          onPress={() => {
            navigation.navigate(ONBOARDINGSLIDER3);
          }}
          progress={0.6}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSlider2;
