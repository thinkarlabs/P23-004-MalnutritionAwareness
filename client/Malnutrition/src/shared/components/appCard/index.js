import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
import {WHITE} from '../../constants/colors';
import {CREATE_ACCOUNT} from '../../constants/constants';
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
      style={{
        borderRadius: 16,
        borderColor: WHITE,
        paddingHorizontal: 20,
        paddingVertical: 25,
        marginBottom: 12,
        backgroundColor: background,
      }}>
      <View style={newStyle ? newStyle : appCardStyles.row}>
        {image}
        <View>
          <Text style={appCardStyles.cardTitle}>{title}</Text>
          <Text style={appCardStyles.cardDesc}>{content}</Text>
          {boxContainer == false ? null : (
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
