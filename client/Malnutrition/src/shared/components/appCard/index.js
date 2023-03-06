import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
import { WHITE } from '../../constants/colors';
import {CREATE_ACCOUNT} from '../../constants/constants';
import {appCardStyles} from './styles';

export const AppCard = ({onPress, newStyle, title, content, image, background}) => {
  return (
    <View style={{
      borderRadius: 20,
      borderColor: WHITE,
      borderWidth: 4,
      paddingHorizontal: 20,
      paddingVertical: 25,
      marginBottom: 8,
      backgroundColor: background,
    }}>
      <View style={newStyle ? newStyle : appCardStyles.row}>
        {image}
        <View style={{flexDirection: 'column'}}>
          <Text style={appCardStyles.cardTitle}>{title}</Text>
          <Text style={appCardStyles.cardDesc}>{content}</Text>
          <TouchableOpacity
            onPress={onPress}
            style={appCardStyles.cardTitleContainer}>
            <Text style={appCardStyles.cardTitleText}>
              {CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
            </Text>
            <View style={{left: 8}}>
              <BackArrowWithCircle />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
