import {View, Text} from 'react-native';
import React from 'react';
import {timelineStyles} from './styles';

const Timeline = () => {
  return (
    <View style={timelineStyles.screenContainer}>
      <View style={timelineStyles.contentContainer}>
        <Text>TimeLIne</Text>
      </View>
    </View>
  );
};

export default Timeline;
