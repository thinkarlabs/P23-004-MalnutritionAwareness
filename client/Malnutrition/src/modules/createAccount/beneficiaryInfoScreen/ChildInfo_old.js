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
import {
  createAccount as createAccountAction,
  hideError as hideErrorAction,
} from '../Actions';
import {connect} from 'react-redux';

const ChildInfo = ({
  route,
  navigation,
  createAccount,
  createAccountData,
  errorText,
  hideError,
}) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValues, setFormValues] = useState({
    user_type: 'PREGNANT',
    name: '',
    phone_number: '',
    is_created_for_someone_else: false,
    relation_with_child: null,
    child: [
      {
        name: '',
        dob: '',
        gender: '',
      },
    ],
  });

  const validatePhoneNumber = val => {
    if (val.length === 10) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const updateIsCreateForSomeoneElse = val => {
    hideError();
    setFormValues({
      ...formValues,
      is_created_for_someone_else: val,
      relation_with_child: !val ? null : formValues.relation_with_child,
    });
  };

  const updateRelationWithChild = val => {
    hideError();
    setFormValues({
      ...formValues,
      relation_with_child: val,
    });
  };

  const onPressCreateAccount = () => {
    if (!isValidForm) {
      return false;
    }
    createAccount(formValues);
  };

  return (
    <SafeAreaView>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(CREATEACCOUNT)}
      />
      <ScrollView style={{height: '75%'}}>
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
            {isPhoneFocused && !isPhoneNumberValid && (
              <Text
                style={[
                  beneficiaryInfoStyles.errorMsg,
                  beneficiaryInfoStyles.shiftUp,
                ]}>
                Invalid Phone Number
              </Text>
            )}
            <View style={beneficiaryInfoStyles.checkboxContainer}>
              <CheckBox
                value={formValues.is_created_for_someone_else}
                style={beneficiaryInfoStyles.checkbox}
                onValueChange={updateIsCreateForSomeoneElse}
                boxType="square"
                tintColor="transparent"
                onFillColor={WHITE}
                name="is_created_for_someone_else"
                onTintColor={'transparent'}
                onCheckColor={LIGHT_GREY}
              />
              <Text style={beneficiaryInfoStyles.checkboxLabel}>
                {CREATE_ACCOUNT.CHECK_BOX_LABEL}
              </Text>
            </View>
            {formValues.is_created_for_someone_else && (
              <View style={beneficiaryInfoStyles.dropdownWrapper}>
                <AppDropdown dropdownValue={updateRelationWithChild} />
              </View>
            )}
            {formValues.is_created_for_someone_else &&
              formValues.relation_with_child == null && (
                <Text
                  style={[
                    beneficiaryInfoStyles.errorMsg,
                    beneficiaryInfoStyles.shiftDown,
                  ]}>
                  Select any one option from the dropdown.
                </Text>
              )}
          </View>
        </View>
        {!!errorText && (
          <Text
            style={[
              beneficiaryInfoStyles.errorMsg,
              beneficiaryInfoStyles.shiftUp,
              beneficiaryInfoStyles.paddingHorizontal,
            ]}>
            {errorText}
          </Text>
        )}
      </ScrollView>
      <View style={beneficiaryInfoStyles.buttonContainer}>
        <Text style={beneficiaryInfoStyles.info}>
          {CREATE_ACCOUNT.BUTTON_INFO}
        </Text>
        <Button
          title={CREATE_ACCOUNT.OTP_BUTTON}
          textStyle={buttonStyles.buttonText}
          buttonStyle={buttonStyles.container}
          disabledStyle={buttonStyles.disabled}
          disabled={!isValidForm}
          onPress={onPressCreateAccount}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  createAccount: (formValues, navigation) =>
    dispatch(createAccountAction(formValues, navigation)),
  hideError: () => dispatch(hideErrorAction()),
});

const mapStateToProps = state => ({
  createAccountData: state.createAccount.createAccountData,
  errorText: state.createAccount.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildInfo);
