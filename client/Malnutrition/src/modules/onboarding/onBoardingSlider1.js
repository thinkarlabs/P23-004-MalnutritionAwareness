import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import {
  ONBOARDSCREEN1_CONTENT,
  ONBOARDSCREEN1_TITLE,
} from '../../shared/constants/constants';
import NextScreenArrow from '../../shared/components/nextScreenArrow';

const OnBoardingSlider1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pinkContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OnboardingSlider3');
          }}>
          <Text style={styles.headerText}>Skip</Text>
        </TouchableOpacity>
        {/* Re-use component for text translation */}
        <AppTextTranslates />
      </View>
      <Image
        source={require('../../../assets/images/onboardingScreen.png')}
        style={styles.headerImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>{ONBOARDSCREEN1_TITLE}</Text>
        <Text style={styles.contentBody}>{ONBOARDSCREEN1_CONTENT}</Text>
      </View>
      {/* Re-use component of next screen button */}
      <NextScreenArrow
        onPress={() => {
          navigation.navigate('OnboardingSlider2');
        }}
      />
    </SafeAreaView>
  );
};

export default OnBoardingSlider1;
