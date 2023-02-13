import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {CREATE_ACCOUNT, SET_APP_FOR} from '../../shared/constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {BUTTON} from '../../shared/constants/colors';
import {TextInput} from 'react-native-gesture-handler';
import SelectDropdown from '../../shared/components/dropdown';

const CreateAccountStageTwo = (
  setScreen,
  setCountry,
  setCheckboxValue,
  toggleCheckBox,
) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const validatePhoneNumber = val => {
    if (val.length === 10) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };
  return (
    <View style={styles.stageWrapper}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.4, y: 0}}
        colors={['#EBEFF1', '#ffffff']}
        style={[styles.selectedStageCard]}>
        <Text style={styles.selectedStageCardDesc}>You have selected</Text>
        <Text style={styles.selectedStageCardTitle}>
          {CREATE_ACCOUNT.CATEGORY_3_TITLE}
        </Text>
      </LinearGradient>
      <View style={styles.formWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Mother Name"
            placeholderTextColor="#616568"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Last menstural period date"
            placeholderTextColor="#616568"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Phone number"
            keyboardType="numeric"
            placeholderTextColor="#616568"
            onBlur={value => validatePhoneNumber(value)}
            onFocus={() => setIsPhoneFocused(true)}></TextInput>
          {isPhoneFocused && isPhoneNumberValid && (
            <Text style={styles.errorMsg}>Invalid Phone Number</Text>
          )}
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={toggleCheckBox}
            style={styles.checkbox}
            onValueChange={setCheckboxValue}
            boxType="square"
            tintColor="transparent"
            onFillColor="#ffffff"
          />
          <Text style={styles.checkboxLabel}>
            Are you setting up this app {'\n'}for someone else?
          </Text>
        </View>
        {/* toggleCheckBox */}
        {toggleCheckBox && (
          <View style={styles.dropdownWrapper}>
            <SelectDropdown dropdownOptions={SET_APP_FOR} />
          </View>
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
  );
};

export default CreateAccountStageTwo;
