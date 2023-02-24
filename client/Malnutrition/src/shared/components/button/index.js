import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {WHITE} from '../../constants/colors';
import {buttonStyles} from './styles';

export const Button = ({onPress, title, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity
      style={{
        ...buttonStyles.container,
        ...buttonStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...textStyle,
          color: WHITE,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
