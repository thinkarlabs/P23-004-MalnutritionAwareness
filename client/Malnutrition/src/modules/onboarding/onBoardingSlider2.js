import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  ONBOARDSCREEN2_CONTENT,
  ONBOARDSCREEN2_TITLE,
} from '../../shared/constants/constants';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import { ONBOARDINGSLIDER3 } from '../../shared/constants/navigatorConstants';

const OnBoardingSlider2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.greenContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(LOGIN);
            }}>
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
          <Text style={styles.contentBody}>{ONBOARDSCREEN2_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={styles.circleContainer}>
        <NextScreenArrow
          onPress={() => {
            navigation.navigate(ONBOARDINGSLIDER3);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSlider2;
