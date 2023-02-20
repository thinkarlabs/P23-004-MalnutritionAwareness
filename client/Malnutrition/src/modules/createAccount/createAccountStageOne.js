import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import React, {useState} from 'react';
import {CREATE_ACCOUNT} from '../../shared/constants/constants';
import {styles} from './styles';
import {BLACK, BUTTON, GREY, WHITE} from '../../shared/constants/colors';
import PregnantWomenImage from '../../../assets/svg/pregnantWomenSVG';
import {AppCard} from '../../shared/components/appCard';
import LactatingMotherImage from '../../../assets/svg/lactatingMotherSVG';
import Child6MonthImage from '../../../assets/svg/6MonthChildSVG';

const CreateAccountStageOne = ({currentStageSelect, setStage, setScreen}) => {
  return (
    <View style={styles.stageWrapper}>
      <ScrollView style={{paddingBottom: '2%'}}>
        <AppCard
          onPress={() => setStage(1)}
          title={CREATE_ACCOUNT.CATEGORY_1_TITLE}
          content={CREATE_ACCOUNT.CATEGORY_1_DESCRIPTION}
          image={<PregnantWomenImage />}
        />
        <AppCard
          onPress={() => setStage(2)}
          title={CREATE_ACCOUNT.CATEGORY_2_TITLE}
          content={CREATE_ACCOUNT.CATEGORY_2_DESCRIPTION}
          image={<LactatingMotherImage />}
          newStyle={styles.rowReverse}
        />
        <AppCard
          onPress={() => setStage(3)}
          title={CREATE_ACCOUNT.CATEGORY_3_TITLE}
          content={CREATE_ACCOUNT.CATEGORY_3_DESCRIPTION}
          image={<Child6MonthImage />}
        />
        <View
        style={styles.detailButtonContainer}>
        <TouchableOpacity
            style={[
              styles.Button,
              currentStageSelect === 0 ? styles.buttonDisabled : '',
            ]}
            underlayColor={BUTTON.PRIMARY}
            onPress={() => {
              setScreen(2),
              prop = setStage()
            }}>
            <Text style={styles.ButtonText}>
              {CREATE_ACCOUNT.BUTTON_DESCRIPTION}
            </Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccountStageOne;
