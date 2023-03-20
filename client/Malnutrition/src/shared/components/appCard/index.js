import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
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
  warningCardContent1,
  warningCardContent2,
  warningCardContent3,
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
        <View style={appCardStyles.imageView}>{image}</View>
        <View style={appCardStyles.titleView}>
          <Text style={appCardStyles.cardTitle}>{title}</Text>
          {content ? (
            <Text style={appCardStyles.cardDesc}>{content}</Text>
          ) : (
            <Text style={appCardStyles.textPadding}>
              <Text style={appCardStyles.cardText}>{warningCardContent1}</Text>
              <Text style={appCardStyles.warningText}>
                {warningCardContent2}
              </Text>
              <Text style={appCardStyles.cardText}>{warningCardContent3}</Text>
            </Text>
          )}
          {boxContainer === false ? null : (
            <View
              style={
                boxText === CREATE_ACCOUNT.ADD_CHILD_DETAILS
                  ? appCardStyles.addChildDetailsView
                  : appCardStyles.cardTitleView
              }>
              <TouchableOpacity
                onPress={onPress}
                style={appCardStyles.cardTitleContainer}>
                <Text style={appCardStyles.cardTitleText}>{boxText}</Text>
                <BackArrowWithCircle />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};
