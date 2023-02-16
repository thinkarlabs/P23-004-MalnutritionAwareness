import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import BackArrowWithCircle from '../../../../assets/svg/backArrowWithCircleSVG';
import { CREATE_ACCOUNT } from '../../constants/constants';
import { styles } from './styles';

export const AppCard = ({onPress, newStyle, title, content, image}) => {
    return (
        <View style={styles.stageCard}>
          <TouchableOpacity
            // onPress={() => setStage(1)}
            onPress={onPress}
            style={newStyle ? newStyle : styles.row}>
            {/* <PregnantWomenImage /> */}
            {image}
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.cardTitle}>{title}
                {/* {CREATE_ACCOUNT.CATEGORY_1_TITLE} */}
              </Text>
              <Text style={styles.cardDesc}>{content}
                {/* {CREATE_ACCOUNT.CATEGORY_1_DESCRIPTION} */}
              </Text>
              <View
                style={styles.cardTitleContainer}>
                <Text style={styles.cardTitleText}>
                    {CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
                    </Text>
                <View style={{left: 8}}>
                  <BackArrowWithCircle />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
    )
}