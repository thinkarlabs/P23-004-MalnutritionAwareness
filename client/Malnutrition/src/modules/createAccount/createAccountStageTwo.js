import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  CREATE_ACCOUNT,
  SET_APP_FOR,
  USER_DETAILS,
} from '../../shared/constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {GREY, PLACEHOLDER_COLOR, WHITE} from '../../shared/constants/colors';
import {TextInput} from 'react-native-gesture-handler';
import SelectDropdown from '../../shared/components/dropdown';
import {Button} from '../../shared/components/button';
import AppTextInput from '../../shared/components/appTextInput';

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
    <ScrollView style={styles.stageWrapper}>
      <View style={{flex: 1}}>
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
            <AppTextInput
              placeholder={USER_DETAILS.MOTHER_NAME}
              placeholderTextColor={PLACEHOLDER_COLOR}
              newStyles={styles.inputField}
            />
          </View>
          <View style={styles.inputContainer}>
            <AppTextInput
              placeholder={USER_DETAILS.MENSTURAL_DATE}
              placeholderTextColor={PLACEHOLDER_COLOR}
              newStyles={styles.inputField}
            />
          </View>
          <View style={styles.inputContainer}>
            <AppTextInput
              newStyles={styles.inputField}
              placeholder={USER_DETAILS.PHONE_NUMBER}
              keyboardType="numeric"
              placeholderTextColor={PLACEHOLDER_COLOR}
              onBlur={value => validatePhoneNumber(value)}
              onFocus={() => setIsPhoneFocused(true)}
            />
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
      </View>
      <View
        style={Platform.select({
          ios: styles.buttonContainer,
          android: styles.androidButtonContainer,
        })}>
        <Text style={styles.Info}>{CREATE_ACCOUNT.BUTTON_INFO}</Text>
        <Button
          title={CREATE_ACCOUNT.OTP_BUTTON}
          textStyle={styles.ButtonText}
          buttonStyle={[styles.Button]}
          onPress={() => {
            setScreen(3);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default CreateAccountStageTwo;
