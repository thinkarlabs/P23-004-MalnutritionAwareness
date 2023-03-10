import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {onBoardingScreenStyles} from './styles';
import {
  APP_NAME,
  ONBOARDSCREEN2_CONTENT,
  ONBOARDSCREEN2_TITLE,
} from '../../shared/constants/constants';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  LOGIN,
  ONBOARDINGSLIDER1,
  ONBOARDINGSLIDER3,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide2 from '../../../assets/svg/onboardingSlide2SVG';
import AppHeader from '../../shared/components/appHeader';

const OnBoardingSlider2 = ({navigation}) => {
  return (
    <SafeAreaView style={onBoardingScreenStyles.greenContainer}>
      <AppHeader
        title={APP_NAME}
        onBoarding={true}
        backText={true}
        onBackPress={() => navigation.navigate(ONBOARDINGSLIDER1)}
        onPress={() => navigation.navigate(LOGIN)}
      />
      <View style={onBoardingScreenStyles.headerImage2}>
        <OnboardingSlide2 />
      </View>
      <View style={onBoardingScreenStyles.contentContainer}>
        <Text style={onBoardingScreenStyles.contentTitle}>
          {ONBOARDSCREEN2_TITLE}
        </Text>
        <Text style={onBoardingScreenStyles.contentBody}>
          {ONBOARDSCREEN2_CONTENT}
        </Text>
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
