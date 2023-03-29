import {View, Text} from 'react-native';
import React from 'react';
import {timelineStyles} from './styles';
import {
  COMING_SOON_HEADING,
  COMING_SOON_TEXT,
} from '../../../shared/constants/constants';
import BabyMonthlyDetails from '../../../../assets/svg/babyMonthlyDetailSVG';

const Timeline = () => {
  return (
    <View style={timelineStyles.container}>
      <View style={timelineStyles.innerContainer}>
        <BabyMonthlyDetails />
      </View>
      <View style={timelineStyles.innerContainer}>
        <Text style={timelineStyles.heading}>{COMING_SOON_HEADING}</Text>
        <Text style={timelineStyles.text}>{COMING_SOON_TEXT}</Text>
      </View>
    </View>
  );
};

export default Timeline;
