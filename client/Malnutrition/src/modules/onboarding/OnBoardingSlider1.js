import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {onBoardingScreenStyles} from './styles';
import {
  APP_NAME,
  ONBOARDSCREEN1_CONTENT,
  ONBOARDSCREEN1_TITLE,
} from '../../shared/constants/constants';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  ONBOARDINGSLIDER2,
  LOGIN,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide1 from '../../../assets/svg/onboardingSlide1SVG';
import AppHeader from '../../shared/components/appHeader';

const OnBoardingSlider1 = ({navigation}) => {
  return (
    <SafeAreaView style={onBoardingScreenStyles.pinkContainer}>
      <AppHeader
        title={APP_NAME}
        onBoarding={true}
        onPress={() => navigation.navigate(LOGIN)}
      />
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
