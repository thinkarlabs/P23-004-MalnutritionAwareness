import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import SplashBackgroundSVG from '../../../assets/svg/splashBackgroungSVG';
import {HEADING_ONE, HEADING_TWO} from '../../shared/constants/constants';
import styles from './styles';

const Splash = ({}) => {
  return (
    <View>
      <View
        style={{
          // position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <SplashBackgroundSVG />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{HEADING_ONE}</Text>
        <Text styles={styles.bodyText}>{HEADING_TWO}</Text>
      </View>
    </View>
  );
};

export default Splash;
