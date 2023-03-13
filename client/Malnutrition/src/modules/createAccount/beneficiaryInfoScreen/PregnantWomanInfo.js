import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {
  CAREGIVER_ROLE,
  CREATE_ACCOUNT,
  ERROR_MESSAGE,
  PLACEHOLDER_DETAILS,
  USER_DETAILS,
} from '../../../shared/constants/constants';
import {
  CREATEACCOUNT,
  OTPVERIFICATION,
} from '../../../shared/constants/navigatorConstants';
import {beneficiaryInfoStyles} from './styles';
import {
  LIGHT_GREY,
  PLACEHOLDER_COLOR,
  WHITE,
} from '../../../shared/constants/colors';
import AppTextInput from '../../../shared/components/appTextInput';
import AppDatePicker from '../../../shared/components/appDatePicker';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '../../../shared/components/button';
import {
  createAccount as createAccountAction,
  hideError as hideErrorAction,
} from '../Actions';
import {connect} from 'react-redux';
import AppDropdown from '../../../shared/components/appDropdown';
import moment from 'moment';
import {buttonStyles} from '../../../shared/components/button/styles';
import {createAccountStyles} from '../styles';
import PhoneIcon from '../../../../assets/svg/icons/phoneIcon';
import CalendarIcon from '../../../../assets/svg/icons/calendarIcon';
import MotherIcon from '../../../../assets/svg/icons/motherIcon';
import {appDropdownStyles} from '../../../shared/components/appDropdown/styles';

const PregnantWomanInfo = ({
  route,
  navigation,
  createAccount,
  createAccountData,
  errorText,
  hideError,
}) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [todaysDate, setTodaysDate] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValues, setFormValues] = useState({
    user_type: 'PREGNANT',
    name: '',
    lmp: '',
    phone_number: '',
    is_created_for_someone_else: false,
    relation_with_child: null,
    child: [],
  });

  useEffect(() => {
    if (todaysDate === '') {
      getTodaysDate();
    }
    if (createAccountData && !errorText) {
      navigation.navigate(OTPVERIFICATION, {
        fromWhere: CREATE_ACCOUNT.CATEGORY_1_TITLE,
        phone_number: formValues.phone_number,
        is_creation: true,
      });
    }
  }, [
    formValues,
    isPhoneNumberValid,
    isPhoneFocused,
    isValidForm,
    todaysDate,
    createAccountData,
    errorText,
    navigation,
    hideError,
  ]);

  const updatename = newVal => {
    hideError();
    setFormValues({...formValues, name: newVal});
  };

  const updatePhoneNumber = newVal => {
    hideError();
    validatePhoneNumber(newVal);
    setFormValues({...formValues, phone_number: '+91' + newVal});
  };

  const updateLMP = newVal => {
    hideError();
    setFormValues({
      ...formValues,
      lmp: moment(newVal.timestamp).format('DD/MM/YYYY'),
    });
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

  const validatePhoneNumber = val => {
    setIsPhoneFocused(true);
    if (val.length === 10) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };
  const onPressCreateAccount = () => {
    if (!isValidForm) {
      return false;
    }
    createAccount(formValues);
  };

  const getTodaysDate = () => {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    setTodaysDate((year + '-' + month + '-' + date).toString());
  };

  useMemo(() => {
    if (
      formValues.user_type &&
      formValues.name &&
      formValues.lmp &&
      formValues.phone_number &&
      isPhoneNumberValid
    ) {
      setIsValidForm(true);

      if (formValues.is_created_for_someone_else) {
        setIsValidForm(Boolean(formValues.relation_with_child));
      }
    } else {
      setIsValidForm(false);
    }
  }, [
    formValues.user_type,
    formValues.name,
    formValues.lmp,
    formValues.phone_number,
    formValues.relation_with_child,
    formValues.is_created_for_someone_else,
    isPhoneNumberValid,
  ]);

  return (
    <SafeAreaView>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(CREATEACCOUNT)}
      />
      <ScrollView style={createAccountStyles.scrollView}>
        <View style={beneficiaryInfoStyles.screenWrapper}>
          <Text style={beneficiaryInfoStyles.titleText}>
            {CREATE_ACCOUNT.BENEFICIARY_INFO_TITLE}
          </Text>
          <View style={beneficiaryInfoStyles.boxContainer}>
            <View style={[beneficiaryInfoStyles.selectedStageCard]}>
              <View style={{flexDirection: 'row'}}>
                {/* <PregnantWomenImage height={56} width={46}/> */}
                <View>
                  <Text style={beneficiaryInfoStyles.selectedStageCardDesc}>
                    You have selected
                  </Text>
                  <Text style={beneficiaryInfoStyles.selectedStageCardTitle}>
                    {route?.params?.title}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={beneficiaryInfoStyles.formWrapper}>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <MotherIcon />
              </View>
              <AppTextInput
                placeholder={USER_DETAILS.NAME}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                name="name"
                changeText={updatename}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppDatePicker
                updatedDate={updateLMP}
                maximumDate={todaysDate}
                titleName={USER_DETAILS.MENSTURAL_DATE}
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
                maxLength={10}
                placeholderTextColor={PLACEHOLDER_COLOR}
                name="phone_number"
                changeText={updatePhoneNumber}
              />
            </View>
            {isPhoneFocused && !isPhoneNumberValid && (
              <Text
                style={[
                  beneficiaryInfoStyles.errorMsg,
                  beneficiaryInfoStyles.shiftUp,
                ]}>
                {ERROR_MESSAGE.PHONE_NUMBER}
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
                <AppDropdown
                  style={appDropdownStyles.roleDropdown}
                  placeholder={PLACEHOLDER_DETAILS.SELECT_YOUR_ROLE}
                  data={CAREGIVER_ROLE}
                  dropdownValue={updateRelationWithChild}
                />
              </View>
            )}
            {formValues.is_created_for_someone_else &&
              formValues.relation_with_child == null && (
                <Text
                  style={[
                    beneficiaryInfoStyles.errorMsg,
                    beneficiaryInfoStyles.shiftDown,
                  ]}>
                  {ERROR_MESSAGE.DROPDOWN}
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
  createAccount: formValues => dispatch(createAccountAction(formValues)),
  hideError: () => dispatch(hideErrorAction()),
});

const mapStateToProps = state => ({
  createAccountData: state.createAccount.createAccountData,
  errorText: state.createAccount.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(PregnantWomanInfo);
