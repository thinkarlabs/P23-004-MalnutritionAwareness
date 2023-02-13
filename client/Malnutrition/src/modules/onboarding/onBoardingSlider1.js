import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import {
  ONBOARDSCREEN1_CONTENT,
  ONBOARDSCREEN1_TITLE,
  SKIP,
} from '../../shared/constants/constants';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import {
  LOGIN,
  ONBOARDINGSLIDER2,
} from '../../shared/constants/navigatorConstants';
import {ONBOARDING_SLIDER1} from '../../shared/constants/imageConstants';

const OnBoardingSlider1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pinkContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(LOGIN);
            }}>
            <Text style={styles.headerText}>{SKIP}</Text>
          </TouchableOpacity>
          {/* Re-use component for text translation */}
          <AppTextTranslates />
        </View>
        <Image source={ONBOARDING_SLIDER1} style={styles.headerImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>{ONBOARDSCREEN1_TITLE}</Text>
          <Text style={styles.contentBody}>{ONBOARDSCREEN1_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={styles.circleContainer}>
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
