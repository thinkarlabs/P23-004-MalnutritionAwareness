import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Skip</Text>
        <View>
        <View style={styles.languageIcon}>
          <Entypo name="triangle-down" style={styles.languageIcon} />
        </View>
        </View>
      </View>
      <Image
        source={require('../../../assets/images/onboardingScreen.png')}
        style={styles.headerImage}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
