import {View, Text, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import {CREATE_ACCOUNT} from '../../shared/constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {BUTTON} from '../../shared/constants/colors';

const CreateAccountStageOne = ({currentStageSelect, setStage, setScreen}) => {
  return (
    <View style={styles.stageWrapper}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.4, y: 0}}
        colors={['#EBEFF1', '#ffffff']}
        style={[
          styles.stageCard,
          styles.leftSpacer,
          currentStageSelect === 1 ? styles.stageOne : '',
        ]}>
        <TouchableOpacity onPress={() => setStage(1)}>
          <Text style={styles.cardTitle}>
            {CREATE_ACCOUNT.CATEGORY_1_TITLE}
          </Text>
          <Text style={styles.cardDesc}>
            {CREATE_ACCOUNT.CATEGORY_1_DESCRIPTION}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        start={{x: 0.6, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#ffffff', '#EBEFF1']}
        style={[
          styles.stageCard,
          styles.rightSpacer,
          currentStageSelect === 2 ? styles.stageTwo : '',
        ]}>
        <TouchableOpacity onPress={() => setStage(2)}>
          <Text style={styles.cardTitle}>
            {CREATE_ACCOUNT.CATEGORY_2_TITLE}
          </Text>
          <Text style={styles.cardDesc}>
            {CREATE_ACCOUNT.CATEGORY_2_DESCRIPTION}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.4, y: 0}}
        colors={['#EBEFF1', '#ffffff']}
        style={[
          styles.stageCard,
          styles.leftSpacer,
          currentStageSelect === 3 ? styles.stageThree : '',
        ]}>
        <TouchableOpacity onPress={() => setStage(3)}>
          <Text style={styles.cardTitle}>
            {CREATE_ACCOUNT.CATEGORY_3_TITLE}
          </Text>
          <Text style={styles.cardDesc}>
            {CREATE_ACCOUNT.CATEGORY_3_DESCRIPTION}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity
        style={[
          styles.Button,
          currentStageSelect === 0 ? styles.buttonDisabled : '',
        ]}
        underlayColor={BUTTON.PRIMARY}
        onPress={() => {
          setScreen(2);
        }}>
        <Text style={styles.ButtonText}>Fill Your Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountStageOne;
