import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  ONBOARDSCREEN3_CONTENT,
  ONBOARDSCREEN3_TITLE,
} from '../../shared/constants/constants';
import AppTextTranslates from '../../shared/components/appTextTranslate';
import NextScreenArrow from '../../shared/components/nextScreenArrow';
import { LOGIN, ONBOARDINGSLIDER1 } from '../../shared/constants/navigatorConstants';

const OnBoardingSlider3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.yellowContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ONBOARDINGSLIDER1);
            }}>
            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>
          <AppTextTranslates />
        </View>
        <Image
          source={require('../../../assets/images/onboardingScreen3.png')}
          style={styles.headerImage}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>{ONBOARDSCREEN3_TITLE}</Text>
          <Text style={styles.contentBody}>{ONBOARDSCREEN3_CONTENT}</Text>
        </View>
      </View>
      {/* Re-use component of next screen button */}
      <View style={styles.circleContainer}>
        <NextScreenArrow
          onPress={() => {
            navigation.navigate(LOGIN);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSlider3;
