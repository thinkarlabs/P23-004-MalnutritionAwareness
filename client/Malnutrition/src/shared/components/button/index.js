import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {WHITE} from '../../constants/colors';

export const Button = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  disabled,
  disabledStyle,
}) => {
  return (
    <TouchableOpacity
      style={disabled ? disabledStyle : buttonStyle}
      disabled={disabled}
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
