import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
import {appCardStyles} from './styles';

export const AppCard = ({
  onPress,
  newStyle,
  title,
  content,
  image,
  background,
  boxContainer,
  boxText,
}) => {
  return (
    <View
      style={[
        appCardStyles.container,
        {
          backgroundColor: background,
        },
      ]}>
      <View style={newStyle ? newStyle : appCardStyles.row}>
        {image}
        <View>
          <Text style={appCardStyles.cardTitle}>{title}</Text>
          <Text style={appCardStyles.cardDesc}>{content}</Text>
          {boxContainer === false ? null : (
            <TouchableOpacity
              onPress={onPress}
              style={appCardStyles.cardTitleContainer}>
              <Text style={appCardStyles.cardTitleText}>{boxText}</Text>
              <BackArrowWithCircle />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
