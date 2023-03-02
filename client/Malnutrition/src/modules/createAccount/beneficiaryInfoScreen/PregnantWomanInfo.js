import {View, Text, SafeAreaView, ScrollView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {
  CREATE_ACCOUNT,
  USER_DETAILS,
} from '../../../shared/constants/constants';
import {CREATEACCOUNT} from '../../../shared/constants/navigatorConstants';
import {beneficiaryInfoStyles} from './styles';
import {PLACEHOLDER_COLOR, WHITE} from '../../../shared/constants/colors';
import AppTextInput from '../../../shared/components/appTextInput';
import AppDatePicker from '../../../shared/components/appDatePicker';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '../../../shared/components/button';
import {createPregnantWomenAccount as createAccountAction} from '../Actions';
import {connect} from 'react-redux';
import AppDropdown from '../../../shared/components/appDropdown';
import {buttonStyles} from '../../../shared/components/button/styles';

const PregnantWomanInfo = ({route, navigation, createPregnantWomenAccount, errorText, pregnantWomanData}) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
    console.log(formValues);
    console.log('error', errorText);
    console.log('data', pregnantWomanData);
  }, [formValues]);

  const updatename = newVal => {
    setFormValues({...formValues, name: newVal});
  };

  const updatePhoneNumber = newVal => {
    setFormValues({...formValues, phone_number: '+91' + newVal});
  };

  const updateLMP = newVal => {
    setFormValues({...formValues, lmp: "23/01/2022"});
  };

  const updateIsCreateForSomeoneElse = val => {
    //console.log(val);
    setFormValues({
      ...formValues,
      is_created_for_someone_else: val,
    });
    // if (!val) {
    //   setFormValues({
    //     ...formValues,
    //     relation_with_child: null,
    //   });
    // }
  };

  const updateRelationWithChild = val => {
    //console.log(val);
    setFormValues({
      ...formValues,
      relation_with_child: val,
    });
  };

  const createAccount = () => {
    console.log(formValues);
    createPregnantWomenAccount(formValues, navigation);
  };


  return (
    <SafeAreaView>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(CREATEACCOUNT)}
      />
      <ScrollView style={{height: '100%'}}>
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
              {/* <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View> */}
              <AppTextInput
                placeholder={USER_DETAILS.NAME}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                name="name"
                changeText={updatename}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              {/* <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View> */}
              <AppDatePicker
                updatedDate={updateLMP}
                titleName={USER_DETAILS.MENSTURAL_DATE}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              {/* <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View> */}
              <AppTextInput
                newStyles={beneficiaryInfoStyles.inputField}
                placeholder={USER_DETAILS.PHONE_NUMBER}
                keyboardType="numeric"
                maxLength={10}
                placeholderTextColor={PLACEHOLDER_COLOR}
                name="phone_number"
                changeText={updatePhoneNumber}
              />
              {isPhoneFocused && isPhoneNumberValid && (
                <Text style={beneficiaryInfoStyles.errorMsg}>Invalid Phone Number</Text>
              )}
            </View>
            <View style={beneficiaryInfoStyles.checkboxContainer}>
              <CheckBox
                value={formValues.is_created_for_someone_else}
                style={beneficiaryInfoStyles.checkbox}
                onValueChange={updateIsCreateForSomeoneElse}
                boxType="square"
                tintColor="transparent"
                onFillColor={WHITE}
                name="is_created_for_someone_else"
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
          </View>
        </View>
     
      <View style={Platform.select({
        android: beneficiaryInfoStyles.androidButtonContainer,
        ios: beneficiaryInfoStyles.buttonContainer
      })}>
        <Text style={beneficiaryInfoStyles.info}>{CREATE_ACCOUNT.BUTTON_INFO}</Text>
        <Button
          title={CREATE_ACCOUNT.OTP_BUTTON}
          textStyle={buttonStyles.buttonText}
          onPress={createAccount}
        />
      </View>
       </ScrollView>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  createPregnantWomenAccount: (formValues, navigation) =>
    dispatch(createAccountAction(formValues, navigation)),
});

const mapStateToProps = state => ({
  pregnantWomanData: state.createAccount.pregnantWomanData,
  errorText: state.createAccount.errorText,
});



export default connect(mapStateToProps, mapDispatchToProps)(PregnantWomanInfo);
