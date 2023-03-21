import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {
  CAREGIVER_ROLE,
  CREATE_ACCOUNT,
  ERROR_MESSAGE,
  GENDER,
  PLACEHOLDER_DETAILS,
  USER_DETAILS,
} from '../../../shared/constants/constants';
import {
  CREATEACCOUNT,
  OTPVERIFICATION,
} from '../../../shared/constants/navigatorConstants';
import {beneficiaryInfoStyles} from './styles';
import CalendarIcon from '../../../../assets/svg/icons/calendarIcon';
import AppTextInput from '../../../shared/components/appTextInput';
import AppDatePicker from '../../../shared/components/appDatePicker';
import CheckBox from '@react-native-community/checkbox';
import {
  LIGHT_GREY,
  PLACEHOLDER_COLOR,
  WHITE,
} from '../../../shared/constants/colors';
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
import moment from 'moment';
import {createAccountStyles} from '../styles';
import {appDropdownStyles} from '../../../shared/components/appDropdown/styles';
import Child6MonthImage from '../../../../assets/svg/6MonthChildSVG';
import LactatingMotherImage from '../../../../assets/svg/lactatingMotherSVG';

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
  const [todaysDate, setTodaysDate] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);
  const [buttonPress, setButtonPress] = useState(false);
  const [formValues, setFormValues] = useState({
    user_type:
      route?.params?.title === 'Lactating Mother' ? 'LACTATING' : 'CAREGIVER',
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

  useEffect(() => {
    if (todaysDate === '') {
      getTodaysDate();
    }
    if (buttonPress && createAccountData && !errorText) {
      navigation.navigate(OTPVERIFICATION, {
        fromWhere: formValues.user_type,
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
    buttonPress,
  ]);

  const getTodaysDate = () => {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    setTodaysDate((year + '-' + month + '-' + date).toString());
  };

  const updateChildName = newVal => {
    hideError();
    setFormValues(() => {
      const updatedData = {...formValues};
      updatedData.child[0].name = newVal;
      return updatedData;
    });
  };

  const updateChildGender = newVal => {
    hideError();
    setFormValues(() => {
      const updatedData = {...formValues};
      updatedData.child[0].gender = newVal;
      return updatedData;
    });
  };

  const updatedDob = newVal => {
    hideError();
    setFormValues(() => {
      const updatedData = {...formValues};
      updatedData.child[0].dob = moment(newVal.timestamp).format('DD/MM/YYYY');
      return updatedData;
    });
  };

  const updateMotherName = newVal => {
    hideError();
    setFormValues({...formValues, name: newVal});
  };

  const updatePhoneNumber = newVal => {
    hideError();
    validatePhoneNumber(newVal);
    setFormValues({...formValues, phone_number: '+91' + newVal});
  };

  const validatePhoneNumber = val => {
    setIsPhoneFocused(true);
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

  useMemo(() => {
    if (
      formValues.user_type &&
      formValues.name &&
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
    formValues.phone_number,
    formValues.is_created_for_someone_else,
    formValues.relation_with_child,
    isPhoneNumberValid,
  ]);

  const onPressCreateAccount = () => {
    setCreteAccountButtonClicked(true);

    if (!isValidForm) {
      return false;
    }
    setButtonPress(true);
    createAccount(formValues);
  };

  return (
    <SafeAreaView>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(CREATEACCOUNT)}
      />
      <ScrollView
        style={createAccountStyles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={beneficiaryInfoStyles.screenWrapper}>
          <Text style={beneficiaryInfoStyles.titleText}>
            {CREATE_ACCOUNT.BENEFICIARY_INFO_TITLE}
          </Text>
          <View style={beneficiaryInfoStyles.boxContainer}>
            <View style={[beneficiaryInfoStyles.selectedStageCard]}>
              <View style={beneficiaryInfoStyles.selectedContainer}>
                <View style={beneficiaryInfoStyles.imageContainer}>
                  {route?.params?.title === 'Lactating Mother' ? (
                    <LactatingMotherImage />
                  ) : (
                    <Child6MonthImage />
                  )}
                </View>
                <View style={beneficiaryInfoStyles.textContainer}>
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
                <ChildIcon />
              </View>
              <AppTextInput
                placeholder={USER_DETAILS.CHILD_NAME}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                name="childName"
                changeText={updateChildName}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppDatePicker
                updatedDate={updatedDob}
                maximumDate={todaysDate}
                titleName={USER_DETAILS.CHILD_DOB}
              />
            </View>
            <View>
              <AppDropdown
                style={appDropdownStyles.genderDropdown}
                placeholder={PLACEHOLDER_DETAILS.GENDER}
                data={GENDER}
                dropdownValue={updateChildGender}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <MotherIcon />
              </View>
              <AppTextInput
                placeholder={USER_DETAILS.MOTHER_NAME}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                name="name"
                changeText={updateMotherName}
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
  createAccount: (formValues, navigation) =>
    dispatch(createAccountAction(formValues, navigation)),
  hideError: () => dispatch(hideErrorAction()),
});

const mapStateToProps = state => ({
  createAccountData: state.createAccount.createAccountData,
  errorText: state.createAccount.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildInfo);
