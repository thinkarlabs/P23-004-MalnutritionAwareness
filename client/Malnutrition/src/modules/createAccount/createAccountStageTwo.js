import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  CREATE_ACCOUNT,
  SET_APP_FOR,
  USER_DETAILS,
} from '../../shared/constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  BUTTON,
  GREY,
  PLACEHOLDER_COLOR,
  WHITE,
} from '../../shared/constants/colors';
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
        colors={[GREY, WHITE]}
        style={[styles.selectedStageCard]}>
        <Text style={styles.selectedStageCardDesc}>You have selected</Text>
        <Text style={styles.selectedStageCardTitle}>
          {CREATE_ACCOUNT.CATEGORY_3_TITLE}
        </Text>
      </LinearGradient>
      <View style={styles.formWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            scrollEnabled
            style={styles.inputField}
            placeholder={USER_DETAILS.MOTHER_NAME}
            placeholderTextColor={PLACEHOLDER_COLOR}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder={USER_DETAILS.MENSTURAL_DATE}
            placeholderTextColor={PLACEHOLDER_COLOR}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder={USER_DETAILS.PHONE_NUMBER}
            keyboardType="numeric"
            placeholderTextColor={PLACEHOLDER_COLOR}
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
            onFillColor={WHITE}
          />
          <Text style={styles.checkboxLabel}>
            {CREATE_ACCOUNT.CHECK_BOX_LABEL}
          </Text>
        </View>
        {/* toggleCheckBox */}
        {toggleCheckBox && (
          <View style={styles.dropdownWrapper}>
            <SelectDropdown dropdownOptions={SET_APP_FOR} />
          </View>
        )}
      </View>
        <Text style={styles.ButtonInfo}>{CREATE_ACCOUNT.BUTTON_INFO}</Text>
        <TouchableOpacity
          style={[styles.Button]}
          underlayColor={BUTTON.PRIMARY}
          onPress={() => {
            setScreen(3);
          }}>
          <Text style={styles.ButtonText}>{CREATE_ACCOUNT.OTP_BUTTON}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default CreateAccountStageTwo;
