import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import * as Progress from 'react-native-progress';

const NextScreenArrow = ({onPress,progress}) => {
  return (
    // <TouchableOpacity
    //   onPress={onPress}>
    //   <View style={styles.circle} >
    //   <Entypo name="chevron-thin-right" style={styles.arrow} />
    //     </View>
    // </TouchableOpacity>
    <TouchableOpacity onPress={onPress}>
      {' '}
      <Progress.Circle
        size={80}
        style={{alignItems: 'center', justifyContent: 'center'}}
        color={'blue'}
        unfilledColor={'transparent'}
        borderColor={'transparent'}
        progress={progress}>
        {' '}
        <View style={[styles.circle, {position: 'absolute'}]}>
          <Entypo name="chevron-thin-right" style={styles.arrow} />{' '}
        </View>{' '}
      </Progress.Circle>{' '}
    </TouchableOpacity>
  );
};

export default NextScreenArrow;
