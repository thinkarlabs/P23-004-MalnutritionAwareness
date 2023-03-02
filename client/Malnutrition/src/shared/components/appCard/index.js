import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
import { CREATE_ACCOUNT } from '../../constants/constants';
import { styles } from './styles';

export const AppCard = ({onPress, newStyle, title, content, image}) => {
    return (
        <View style={styles.stageCard}>
          <View
            style={newStyle ? newStyle : styles.row}>
            {image}
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.cardTitle}>{title}
              </Text>
              <Text style={styles.cardDesc}>{content}
              </Text>
              <TouchableOpacity
              onPress={onPress}
                style={styles.cardTitleContainer}>
                <Text style={styles.cardTitleText}>
                    {CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
                    </Text>
                <View style={{left: 8}}>
                  <BackArrowWithCircle />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}