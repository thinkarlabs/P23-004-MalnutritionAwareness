import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
import {CREATE_ACCOUNT} from '../../constants/constants';
import {appCardStyles} from './styles';

export const AppCard = ({onPress, newStyle, title, content, image}) => {
  return (
    <View style={appCardStyles.stageCard}>
      <View style={newStyle ? newStyle : appCardStyles.row}>
        {image}
        <View>
          <Text style={appCardStyles.cardTitle}>{title}</Text>
          <Text style={appCardStyles.cardDesc}>{content}</Text>
          <TouchableOpacity
            onPress={onPress}
            style={appCardStyles.cardTitleContainer}>
            <Text style={appCardStyles.cardTitleText}>
              {CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
            </Text>
            <View>
              <BackArrowWithCircle />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
