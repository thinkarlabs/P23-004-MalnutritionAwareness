import React from 'react';
import {Text, View} from 'react-native';
import SplashBackgroundSVG from '../../../assets/svg/splashBackgroungSVG';
import {HEADING_ONE, HEADING_TWO} from '../../shared/constants/constants';
import splashStyle from './styles';

const Splash = ({}) => {
  return (
    <View>
      <View style={splashStyle.svgBackground}>
        <SplashBackgroundSVG />
      </View>
      <View style={splashStyle.title}>
        <Text style={splashStyle.titleText}>{HEADING_ONE}</Text>
        <Text style={splashStyle.bodyText}>{HEADING_TWO}</Text>
      </View>
    </View>
  );
};

export default Splash;
