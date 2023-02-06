import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

const NextScreenArrow = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <View style={styles.circle} >
      <Entypo name="chevron-thin-right" style={styles.arrow} />
        </View>
    </TouchableOpacity>
  );
};

export default NextScreenArrow;
