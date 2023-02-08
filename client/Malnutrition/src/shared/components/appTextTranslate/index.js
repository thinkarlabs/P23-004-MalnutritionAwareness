import {View, Text} from 'react-native';
import React from 'react';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const AppTextTranslates = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.languageIcon}>
        <Entypo name="triangle-down" style={styles.languageIcon} />
      </View>
      <Text style={styles.languageText}>En</Text>
    </View>
  );
};

export default AppTextTranslates;