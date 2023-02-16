import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BackArrow from '../../../../assets/svg/backArrowSVG';
import {CREATE_ACCOUNT} from '../../constants/navigatorConstants';
import AppTextTranslates from '../appTextTranslate';
import {styles} from './styles';

const AppHeader = ({navigation, canGoBack, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(CREATE_ACCOUNT)} >
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        </View>
      <View style={styles.secondContainer}>
        <View style={styles.secondTextContainer}>
        <AppTextTranslates />
        </View>
      </View>
      
    </View>
  );
};

export default AppHeader;
