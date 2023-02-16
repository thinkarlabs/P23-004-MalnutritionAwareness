import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import React, {useState} from 'react';
import {CREATE_ACCOUNT} from '../../shared/constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {BUTTON, PINK} from '../../shared/constants/colors';
import {TextInput} from 'react-native-gesture-handler';
import Dropdown from 'react-native-input-select';
import CreateAccountStageOne from './createAccountStageOne';
import CreateAccountStageTwo from './createAccountStageTwo';
import AppHeader from '../../shared/components/appHeader';

const CreateAccount = () => {
  const [currentScreenSelect, setCurrentScreenSelect] = useState(1);
  const [currentStageSelect, setCurrentStageSelect] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [appFor, setAppFor] = useState('');

  const setStage = stage => {
    setCurrentStageSelect(stage);
    console.log('stage:' + stage);
  };

  const setScreen = screen => {
    setCurrentScreenSelect(screen);
  };
  const setCheckbox = val => {
    setToggleCheckBox(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenWrapper}>
        <AppHeader title={'Create Account'} />
        <Text style={styles.titleText}>
          {currentScreenSelect === 1 &&
            CREATE_ACCOUNT.SELECT_CURRENT_STAGE_TEXT}
          {currentScreenSelect === 2 && CREATE_ACCOUNT.BENEFICIARY_INFO_TITLE}
        </Text>

        {currentScreenSelect === 1 && (
          <CreateAccountStageOne
            currentStageSelect={currentStageSelect}
            setStage={setStage}
            setScreen={setScreen}
          />
        )}
        {currentScreenSelect === 2 && (
          <CreateAccountStageTwo
            setScreen={setScreen}
            setCheckboxValue={setCheckbox}
            setAppFor={setAppFor}
            currentScreenSelect={currentScreenSelect}
            toggleCheckBox={toggleCheckBox}
            appFor={appFor}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
