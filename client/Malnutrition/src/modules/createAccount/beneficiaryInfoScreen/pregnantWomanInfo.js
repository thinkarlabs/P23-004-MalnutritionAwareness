import {View, Text, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
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
  const [formValues, setFormValues] = useState({
    user_type: 'PREGNANT',
    name: '',
    lmp: '',
    phone_number: '',
    is_created_for_someone_else: false,
    relation_with_child: null,
  });

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const updatename = newVal => {
    setFormValues({...formValues, name: newVal});
  };

  const updatePhoneNumber = newVal => {
    setFormValues({...formValues, phone_number: newVal});
  };

  const updateLMP = newVal => {
    setFormValues({...formValues, lmp: newVal.timestamp});
  };

  const updateIsCreateForSomeoneElse = val => {
    //console.log(val);
    setFormValues({
      ...formValues,
      is_created_for_someone_else: val,
    });
    if (!val) {
      setFormValues({
        ...formValues,
        relation_with_child: null,
      });
    }
  };

  const updateRelationWithChild = val => {
    //console.log(val);
    setFormValues({
      ...formValues,
      relation_with_child: val,
    });
  };

  const validatePhoneNumber = val => {
    if (val.length === 10) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
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
              name="name"
              changeText={updatename}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View>
            <AppDatePicker updatedDate={updateLMP} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconTextInput}>
              <CalenderIcon />
            </View>
            <AppTextInput
              newStyles={styles.inputField}
              placeholder={USER_DETAILS.PHONE_NUMBER}
              keyboardType="numeric"
              maxLength={10}
              placeholderTextColor={PLACEHOLDER_COLOR}
              name="phone_number"
              changeText={updatePhoneNumber}
            />
            {isPhoneFocused && isPhoneNumberValid && (
              <Text style={styles.errorMsg}>Invalid Phone Number</Text>
            )}
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={formValues.is_created_for_someone_else}
              style={styles.checkbox}
              onValueChange={updateIsCreateForSomeoneElse}
              boxType="square"
              tintColor="transparent"
              onFillColor={WHITE}
              name="is_created_for_someone_else"
            />
            <Text style={styles.checkboxLabel}>
              {CREATE_ACCOUNT.CHECK_BOX_LABEL}
            </Text>
          </View>
          {formValues.is_created_for_someone_else && (
            <View style={styles.dropdownWrapper}>
              <SelectDropdown
                dropdownOptions={SET_APP_FOR}
                dropdownValue={updateRelationWithChild}
              />
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
