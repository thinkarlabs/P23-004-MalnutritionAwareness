import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  BACK,
  ONBOARDSCREEN3_CONTENT,
  ONBOARDSCREEN3_TITLE,
} from '../../shared/constants/constants';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  LOGIN,
  ONBOARDINGSLIDER1,
  CREATEACCOUNT,
} from '../../shared/constants/navigatorConstants';
import OnboardingSlide3 from '../../../assets/svg/onboardingSlide3SVG';

const OnBoardingSlider3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.yellowContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ONBOARDINGSLIDER1);
            }}>
            <Text style={styles.headerText}>{BACK}</Text>
          </TouchableOpacity>
          <AppTextTranslates />
        </View>
        <View style={styles.headerImage}>
          <OnboardingSlide3 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>{ONBOARDSCREEN3_TITLE}</Text>
          <Text style={styles.contentBody}>{ONBOARDSCREEN3_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={styles.circleContainer}>
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
