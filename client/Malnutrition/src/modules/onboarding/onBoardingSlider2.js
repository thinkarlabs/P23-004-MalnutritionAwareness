import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
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
    <SafeAreaView style={styles.greenContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(CREATEACCOUNT);
            }}>
            <Text style={styles.headerText}>{SKIP}</Text>
          </TouchableOpacity>
          {/* Re-use component for text translation */}
          <AppTextTranslates />
        </View>
        <View style={styles.headerImage2}>
          <OnboardingSlide2 />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>{ONBOARDSCREEN2_TITLE}</Text>
          <Text style={styles.contentBody}>{ONBOARDSCREEN2_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={styles.circleContainer}>
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
