import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import React, {useState} from 'react';
import {CREATE_ACCOUNT} from '../../shared/Constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {BLACK, PINK, BUTTON} from '../../shared/Constants/colors';
import {TextInput} from 'react-native-gesture-handler';
import Dropdown from 'react-native-input-select';

const CreateAccount = () => {
  const [currentScreenSelect, setCurrentScreenSelect] = useState(1);
  const [currentStageSelect, setCurrentStageSelect] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [country, setCountry] = React.useState();

  const setStage = stage => {
    setCurrentStageSelect(stage);
  };

  const setScreen = screen => {
    setCurrentScreenSelect(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenWrapper}>
        <Text style={styles.titleText}>
          {currentScreenSelect === 1 &&
            CREATE_ACCOUNT.SELECT_CURRENT_STAGE_TEXT}
          {currentScreenSelect === 2 && CREATE_ACCOUNT.BENEFICIARY_INFO_TITLE}
        </Text>
        {currentScreenSelect === 1 && (
          <View>
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
        )}
        {currentScreenSelect === 2 && (
          <View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0.4, y: 0}}
              colors={['#EBEFF1', '#ffffff']}
              style={[styles.selectedStageCard]}>
              <Text style={styles.selectedStageCardDesc}>
                You have selected
              </Text>
              <Text style={styles.selectedStageCardTitle}>
                {CREATE_ACCOUNT.CATEGORY_3_TITLE}
              </Text>
            </LinearGradient>
            <View style={styles.formWrapper}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Mother Name"></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Last menstural period date"></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Phone number"></TextInput>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={toggleCheckBox}
                  style={styles.checkbox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkboxLabel}>
                  Are you setting up this app {'\n'}for someone else?
                </Text>
              </View>
              {toggleCheckBox && (
                <Dropdown
                  placeholder="Select an option..."
                  options={[
                    {name: 'Albania', code: 'AL'},
                    {name: 'Åland Islands', code: 'AX'},
                    {name: 'Algeria', code: 'DZ'},
                    {name: 'American Samoa', code: 'AS'},
                    {name: 'Andorra', code: 'AD'},
                    {name: 'Angola', code: 'AO'},
                    {name: 'Anguilla', code: 'AI'},
                    {name: 'Antarctica', code: 'AQ'},
                    {name: 'Antigua and Barbuda', code: 'AG'},
                  ]}
                  optionLabel={'name'}
                  optionValue={'code'}
                  selectedValue={country}
                  onValueChange={value => setCountry(value)}
                  primaryColor={'green'}
                />
              )}
            </View>
            <Text style={styles.ButtonInfo}>
              By click on below button, you will {'\n'} recieve one OTP code
            </Text>
            <TouchableOpacity
              style={[styles.Button]}
              underlayColor={BUTTON.PRIMARY}
              onPress={() => {
                setScreen(3);
              }}>
              <Text style={styles.ButtonText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
