import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const NextScreenArrow = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.circleContainer}
      onPress={onPress}>
      <View style={styles.circle} />
      <Entypo name="chevron-thin-right" style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default NextScreenArrow;
