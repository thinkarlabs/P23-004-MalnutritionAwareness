import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {nextScreenArrowStyles} from './styles';
import * as Progress from 'react-native-progress';
import {BLUE, TRANSPARENT} from '../../constants/colors';

const NextScreenArrow = ({onPress, progress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Progress.Circle
        size={80}
        style={nextScreenArrowStyles.progressCircle}
        color={BLUE}
        unfilledColor={TRANSPARENT}
        borderColor={TRANSPARENT}
        progress={progress}>
        <View style={nextScreenArrowStyles.circle}>
          <Entypo
            name="chevron-thin-right"
            style={nextScreenArrowStyles.arrow}
          />
        </View>
      </Progress.Circle>
    </TouchableOpacity>
  );
};

export default NextScreenArrow;
