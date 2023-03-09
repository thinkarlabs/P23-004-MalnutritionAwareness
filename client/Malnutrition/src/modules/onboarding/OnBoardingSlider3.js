import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {onBoardingScreenStyles} from './styles';
import {
  APP_NAME,
  ONBOARDSCREEN3_CONTENT,
  ONBOARDSCREEN3_TITLE,
} from '../../shared/constants/constants';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  LOGIN,
  ONBOARDINGSLIDER2,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide3 from '../../../assets/svg/onboardingSlide3SVG';
import AppHeader from '../../shared/components/appHeader';

const OnBoardingSlider3 = ({navigation}) => {
  return (
    <SafeAreaView style={onBoardingScreenStyles.yellowContainer}>
      <AppHeader
        title={APP_NAME}
        onBoarding={true}
        backText={true}
        onBackPress={() => navigation.navigate(ONBOARDINGSLIDER2)}
        onPress={() => navigation.navigate(LOGIN)}
      />
      <View style={onBoardingScreenStyles.headerImage}>
        <OnboardingSlide3 />
      </View>
      <View style={onBoardingScreenStyles.contentContainer}>
        <Text style={onBoardingScreenStyles.contentTitle}>
          {ONBOARDSCREEN3_TITLE}
        </Text>
        <Text style={onBoardingScreenStyles.contentBody}>
          {ONBOARDSCREEN3_CONTENT}
        </Text>
      </View>
      {/* Re-use component of next screen button */}
      <View style={onBoardingScreenStyles.circleContainer}>
        <NextScreenArrow
          onPress={() => {
            navigation.navigate(LOGIN);
          }}
          progress={1}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSlider3;
