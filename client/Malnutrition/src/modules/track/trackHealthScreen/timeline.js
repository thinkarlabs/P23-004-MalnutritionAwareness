import {View, Text} from 'react-native';
import React from 'react';
import {timelineStyles} from './styles';
import {
  COMING_SOON_HEADING,
  COMING_SOON_TEXT,
  PLACEHOLDER_DETAILS,
  WEIGHT_FOR_HEIGHT,
} from '../../../shared/constants/constants';
import BabyMonthlyDetails from '../../../../assets/svg/babyMonthlyDetailSVG';
import AppDropdown from '../../../shared/components/appDropdown';
import { appDropdownStyles } from '../../../shared/components/appDropdown/styles';

const Timeline = () => {
  return (
    <View style={timelineStyles.container}>
      {/* <View style={timelineStyles.innerContainer}>
        <BabyMonthlyDetails />
      </View>
      <View style={timelineStyles.innerContainer}>
        <Text style={timelineStyles.heading}>{COMING_SOON_HEADING}</Text>
        <Text style={timelineStyles.text}>{COMING_SOON_TEXT}</Text>
  </View> */}
      <View style={timelineStyles.boxContainer}>
        <Text style={timelineStyles.boxTitleContainer}>3 Months</Text>
        <View style={timelineStyles.errorContainer}>
          <Text style={timelineStyles.errorTitle}>Moderately Wasted (MAM)</Text>
        </View>
        <View style={timelineStyles.navigationContainer}>
          <Text style={timelineStyles.navigationText}>Tap to know more</Text>
        </View>
      </View>
    </View>
  );
};

export default Timeline;
