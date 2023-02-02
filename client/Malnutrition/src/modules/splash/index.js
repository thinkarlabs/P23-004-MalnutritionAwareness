import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { HEADING_ONE, HEADING_TWO } from '../../shared/Constants/constants';
import styles from './styles';

const Splash = ({ }) => {
  return (
    <ImageBackground style={styles.header} source={require('../../../assets/images/2.png')} >
      <View style={styles.title}>
        <Text style={styles.titleText}>{HEADING_ONE}</Text>
        <Text styles={styles.bodyText}>{HEADING_TWO}</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
