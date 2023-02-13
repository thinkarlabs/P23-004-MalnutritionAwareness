import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {HEADING_ONE, HEADING_TWO} from '../../shared/constants/constants';
import {SPLASH_BACKGROUND} from '../../shared/constants/imageConstants';
import styles from './styles';

const Splash = ({}) => {
  return (
    <ImageBackground style={styles.header} source={SPLASH_BACKGROUND}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{HEADING_ONE}</Text>
        <Text style={styles.bodyText}>{HEADING_TWO}</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
