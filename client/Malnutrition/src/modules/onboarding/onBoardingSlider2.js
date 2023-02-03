import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { ONBOARDSCREEN2_CONTENT, ONBOARDSCREEN2_TITLE } from '../../shared/constants/constants';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import NextScreenArrow from '../../shared/components/nextScreenArrow';

const OnBoardingSlider2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.greenContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate('OnboardingSlider3')}}>
        <Text style={styles.headerText}>Skip</Text>
        </TouchableOpacity>
{/* Re-use component for text translation */}
        <AppTextTranslates />
      </View>
      <Image
        source={require('../../../assets/images/onboardingScreen2.png')}
        style={styles.headerImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>{ONBOARDSCREEN2_TITLE}</Text>
        <Text style={styles.contentBody}>
          {ONBOARDSCREEN2_CONTENT}
        </Text>
      </View>
{/* Re-use component of next screen button */}
      <NextScreenArrow onPress={() => {navigation.navigate('OnboardingSlider3')}}/>
    </SafeAreaView>
  );
};

export default OnBoardingSlider2;
