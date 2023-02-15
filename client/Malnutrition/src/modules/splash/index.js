import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import SplashBackgroundSVG from '../../../assets/svg/splashBackgroungSVG';
import {HEADING_ONE, HEADING_TWO} from '../../shared/constants/constants';
import styles from './styles';

const Splash = ({}) => {
  return (
    <View style={{}}>
      <SplashBackgroundSVG>
      <View style={styles.title}>
        <Text style={styles.titleText}>{HEADING_ONE}</Text>
        <Text styles={styles.bodyText}>{HEADING_TWO}</Text>
      </View>
        </SplashBackgroundSVG>
    </View>
  );
};

export default Splash;
