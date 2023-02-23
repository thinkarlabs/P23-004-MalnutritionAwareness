import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BackArrow from '../../../../assets/svg/backArrowSVG';
import {CREATEACCOUNT} from '../../constants/navigatorConstants';
import AppTextTranslates from '../appTextTranslate';
import {styles} from './styles';

const AppHeader = ({onPress, canGoBack, title, backArrowValue}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPress} backArrowValue={backArrowValue} style={{paddingLeft: 20}}>
          {
          backArrowValue == true ? ( <BackArrow />) : null
          }
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
