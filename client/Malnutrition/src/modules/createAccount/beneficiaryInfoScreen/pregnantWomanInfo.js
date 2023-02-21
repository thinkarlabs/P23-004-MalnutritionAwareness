import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {
  CREATE_ACCOUNT,
  SET_APP_FOR,
  USER_DETAILS,
} from '../../../shared/constants/constants';
import {CREATEACCOUNT} from '../../../shared/constants/navigatorConstants';
import {styles} from './styles';
import {GREY, PLACEHOLDER_COLOR, WHITE} from '../../../shared/constants/colors';
import PregnantWomenImage from '../../../../assets/svg/pregnantWomenSVG';
import CalenderIcon from '../../../../assets/svg/calenderIconSVG';
import AppTextInput from '../../../shared/components/appTextInput';
import AppDatePicker from '../../../shared/components/appDatePicker';
import CheckBox from '@react-native-community/checkbox';
import SelectDropdown from '../../../shared/components/dropdown';
import {Button} from '../../../shared/components/button';

const pregnantWomanInfo = ({route, navigation}) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const validatePhoneNumber = val => {
    if (val.length === 10) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const setCheckbox = val => {
    setToggleCheckBox(val);
  };

  return (
    <SafeAreaView>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(CREATEACCOUNT)}
      />
      <View style={styles.screenWrapper}>
        <Text style={styles.titleText}>
          {CREATE_ACCOUNT.BENEFICIARY_INFO_TITLE}
        </Text>
        <View style={styles.boxContainer}>
          <View style={[styles.selectedStageCard]}>
            <View style={{flexDirection: 'row'}}>
              {/* <PregnantWomenImage height={56} width={46}/> */}
              <View>
                <Text style={styles.selectedStageCardDesc}>
                  You have selected
                </Text>
                <Text style={styles.selectedStageCardTitle}>
                  {route.params.title}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.inputContainer}>
            <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View>
            <AppTextInput
              placeholder={USER_DETAILS.MOTHER_NAME}
              placeholderTextColor={PLACEHOLDER_COLOR}
              newStyles={styles.inputField}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View>
            <AppDatePicker />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View>
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
              onValueChange={setCheckbox}
              boxType="square"
              tintColor="transparent"
              onFillColor={WHITE}
            />
            <Text style={styles.checkboxLabel}>
              {CREATE_ACCOUNT.CHECK_BOX_LABEL}
            </Text>
          </View>
          {toggleCheckBox && (
            <View style={styles.dropdownWrapper}>
              <SelectDropdown dropdownOptions={SET_APP_FOR} />
            </View>
          )}
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
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default pregnantWomanInfo;
