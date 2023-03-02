import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {
  CREATE_ACCOUNT,
  USER_DETAILS,
} from '../../../shared/constants/constants';
import {CREATEACCOUNT} from '../../../shared/constants/navigatorConstants';
import {beneficiaryInfoStyles} from './styles';
import CalendarIcon from '../../../../assets/svg/icons/calendarIcon';
import AppTextInput from '../../../shared/components/appTextInput';
import AppDatePicker from '../../../shared/components/appDatePicker';
import CheckBox from '@react-native-community/checkbox';
import {PLACEHOLDER_COLOR, WHITE} from '../../../shared/constants/colors';
import PhoneIcon from '../../../../assets/svg/icons/phoneIcon';
import ChildIcon from '../../../../assets/svg/icons/childIcon';
import MotherIcon from '../../../../assets/svg/icons/motherIcon';
import {Button} from '../../../shared/components/button';
import AppDropdown from '../../../shared/components/appDropdown';
import {buttonStyles} from '../../../shared/components/button/styles';

const LactatingMotherInfo = ({route, navigation}) => {
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
      <ScrollView style={{height: '80%'}}>
        <View style={beneficiaryInfoStyles.screenWrapper}>
          <Text style={beneficiaryInfoStyles.titleText}>
            {CREATE_ACCOUNT.BENEFICIARY_INFO_TITLE}
          </Text>
          <View style={beneficiaryInfoStyles.boxContainer}>
            <View style={[beneficiaryInfoStyles.selectedStageCard]}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={beneficiaryInfoStyles.selectedStageCardDesc}>
                    You have selected
                  </Text>
                  <Text style={beneficiaryInfoStyles.selectedStageCardTitle}>
                    {route.params.title}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={beneficiaryInfoStyles.formWrapper}>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <ChildIcon />
              </View>
              <AppTextInput
                placeholder={USER_DETAILS.CHILD_NAME}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                label={USER_DETAILS.CHILD_NAME}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppDatePicker titleName={USER_DETAILS.CHILD_DOB} />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <MotherIcon />
              </View>
              <AppTextInput
                placeholder={USER_DETAILS.MOTHER_NAME}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <PhoneIcon />
              </View>
              <AppTextInput
                newStyles={beneficiaryInfoStyles.inputField}
                placeholder={USER_DETAILS.PHONE_NUMBER}
                keyboardType="numeric"
                placeholderTextColor={PLACEHOLDER_COLOR}
                onBlur={value => validatePhoneNumber(value)}
                onFocus={() => setIsPhoneFocused(true)}
              />
              {isPhoneFocused && isPhoneNumberValid && (
                <Text style={beneficiaryInfoStyles.errorMsg}>
                  Invalid Phone Number
                </Text>
              )}
            </View>
            <View style={beneficiaryInfoStyles.checkboxContainer}>
              <CheckBox
                value={toggleCheckBox}
                style={beneficiaryInfoStyles.checkbox}
                onValueChange={setCheckbox}
                boxType="square"
                tintColor="transparent"
                onFillColor={WHITE}
              />
              <Text style={beneficiaryInfoStyles.checkboxLabel}>
                {CREATE_ACCOUNT.CHECK_BOX_LABEL}
              </Text>
            </View>
            {toggleCheckBox && (
              <View style={beneficiaryInfoStyles.dropdownWrapper}>
                <AppDropdown />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={beneficiaryInfoStyles.buttonContainer}>
        <Text style={beneficiaryInfoStyles.info}>
          {CREATE_ACCOUNT.BUTTON_INFO}
        </Text>
        <Button
          title={CREATE_ACCOUNT.OTP_BUTTON}
          textStyle={buttonStyles.buttonText}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default LactatingMotherInfo;
