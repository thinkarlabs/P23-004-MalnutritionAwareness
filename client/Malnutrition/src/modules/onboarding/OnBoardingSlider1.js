import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {onBoardingScreenStyles} from './styles';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import {
  ONBOARDSCREEN1_CONTENT,
  ONBOARDSCREEN1_TITLE,
  SKIP,
} from '../../shared/constants/constants';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  ONBOARDINGSLIDER2,
  CREATEACCOUNT,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide1 from '../../../assets/svg/onboardingSlide1SVG';

const OnBoardingSlider1 = ({navigation}) => {
  return (
    <SafeAreaView style={onBoardingScreenStyles.pinkContainer}>
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
        <View style={onBoardingScreenStyles.headerImage}>
          <OnboardingSlide1 />
        </View>
        <View style={onBoardingScreenStyles.contentContainer}>
          <Text style={onBoardingScreenStyles.contentTitle}>
            {ONBOARDSCREEN1_TITLE}
          </Text>
          <Text style={onBoardingScreenStyles.contentBody}>
            {ONBOARDSCREEN1_CONTENT}
          </Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={onBoardingScreenStyles.circleContainer}>
        <NextScreenArrow
          onPress={() => {
            navigation.navigate(ONBOARDINGSLIDER2);
          }}
          progress={0.3}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSlider1;
