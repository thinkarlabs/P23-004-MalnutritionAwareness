import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useMemo, useState} from 'react';
import {trackHealthContainerStyles} from './styles';
import {
  HEIGHT_FOR_AGE,
  PLACEHOLDER_DETAILS,
  TRACK_HEALTH,
  WEIGHT_FOR_AGE,
  WEIGHT_FOR_HEIGHT,
  WHATSAPP_MESSAGE,
} from '../../../shared/constants/constants';
import {beneficiaryInfoStyles} from '../../createAccount/beneficiaryInfoScreen/styles';
import AppTextInput from '../../../shared/components/appTextInput';
import CalendarIcon from '../../../../assets/svg/icons/calendarIcon';
import {PLACEHOLDER_COLOR} from '../../../shared/constants/colors';
import {Button} from '../../../shared/components/button';
import {buttonStyles} from '../../../shared/components/button/styles';
import AppDropdown from '../../../shared/components/appDropdown';
import {appDropdownStyles} from '../../../shared/components/appDropdown/styles';
import {trackHealth as trackHealthAction} from '../Actions';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import WhatsappIcon from '../../../../assets/svg/icons/whatsappIcon';

const TrackHealth = ({trackHealthData, errorText, trackHealth}) => {
  const [isValidForm, setIsValidForm] = useState(false);
  const [showText, setShowText] = useState(false);
  const [formValues, setFormValues] = useState({
    weeks: '',
    weight: '',
    height: '',
    head_circumference: '',
    mid_upper_arm_circumference: '',
    weight_for_age: '',
    height_for_age: '',
    weight_for_height: '',
  });

  const updateWeeks = val => {
    setFormValues({
      ...formValues,
      weeks: val,
    });
  };

  const updateHeight = val => {
    setFormValues({
      ...formValues,
      height: val,
    });
  };

  const updateWeight = val => {
    setFormValues({
      ...formValues,
      weight: val,
    });
  };

  const updateHeadCircumference = val => {
    setFormValues({
      ...formValues,
      head_circumference: val,
    });
  };

  const updateMidUpperArmCircumference = val => {
    setFormValues({
      ...formValues,
      mid_upper_arm_circumference: val,
    });
  };

  const updateWeightForAge = val => {
    setFormValues({
      ...formValues,
      weight_for_age: val,
    });
  };

  const updateHeightForAge = val => {
    setFormValues({
      ...formValues,
      height_for_age: val,
    });
  };

  const updateWeightForHeight = val => {
    setFormValues({
      ...formValues,
      weight_for_height: val,
    });
  };

  useMemo(() => {
    if (
      formValues.weeks &&
      formValues.weight &&
      formValues.height &&
      formValues.head_circumference &&
      formValues.mid_upper_arm_circumference &&
      formValues.weight_for_age &&
      formValues.height_for_age &&
      formValues.weight_for_height
    ) {
      setIsValidForm(true);
    }
  }, [
    formValues.weeks,
    formValues.weight,
    formValues.height,
    formValues.head_circumference,
    formValues.mid_upper_arm_circumference,
    formValues.weight_for_age,
    formValues.height_for_age,
    formValues.weight_for_height,
  ]);

  const onPressShowResult = () => {
    if (!isValidForm) {
      return false;
    }
    setShowText(true);
    trackHealth(formValues);
  };

  return (
    <ScrollView style={{height: '100%'}}>
      <View style={trackHealthContainerStyles.screenContainer}>
        <View style={trackHealthContainerStyles.inputContainer}>
          <Text style={trackHealthContainerStyles.inputTitle}>
            {TRACK_HEALTH.TITLE}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppTextInput
                placeholder={TRACK_HEALTH.PLACEHOLDER1}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                keyboardType="numeric"
                name="weeks"
                changeText={updateWeeks}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppTextInput
                placeholder={TRACK_HEALTH.PLACEHOLDER2}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                keyboardType="numeric"
                name="weight"
                changeText={updateWeight}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppTextInput
                placeholder={TRACK_HEALTH.PLACEHOLDER3}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                keyboardType="numeric"
                name="height"
                changeText={updateHeight}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppTextInput
                placeholder={TRACK_HEALTH.PLACEHOLDER4}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                keyboardType="numeric"
                name="headCircumference"
                changeText={updateHeadCircumference}
              />
            </View>
            <View style={beneficiaryInfoStyles.inputContainer}>
              <View style={beneficiaryInfoStyles.iconTextInput}>
                <CalendarIcon />
              </View>
              <AppTextInput
                placeholder={TRACK_HEALTH.PLACEHOLDER5}
                placeholderTextColor={PLACEHOLDER_COLOR}
                newStyles={beneficiaryInfoStyles.inputField}
                keyboardType="numeric"
                name="midUpperArmCircumference"
                changeText={updateMidUpperArmCircumference}
              />
            </View>
            <View>
              <AppDropdown
                style={appDropdownStyles.genderDropdown}
                placeholder={PLACEHOLDER_DETAILS.WEIGHT_FOR_AGE}
                data={WEIGHT_FOR_AGE}
                dropdownValue={updateWeightForAge}
              />
            </View>
            <View>
              <AppDropdown
                style={appDropdownStyles.genderDropdown}
                placeholder={PLACEHOLDER_DETAILS.HEIGHT_FOR_AGE}
                data={HEIGHT_FOR_AGE}
                dropdownValue={updateHeightForAge}
              />
            </View>
            <View>
              <AppDropdown
                style={appDropdownStyles.genderDropdown}
                placeholder={PLACEHOLDER_DETAILS.WEIGHT_FOR_HEIGHT}
                data={WEIGHT_FOR_HEIGHT}
                dropdownValue={updateWeightForHeight}
              />
            </View>
          </ScrollView>
          <Button
            title={TRACK_HEALTH.BUTTON}
            textStyle={buttonStyles.buttonText}
            buttonStyle={trackHealthContainerStyles.buttonContainer}
            disabledStyle={buttonStyles.disabled}
            disabled={!isValidForm}
            onPress={onPressShowResult}
          />
        </View>
        <View style={{paddingTop: 20}}>
          {showText && (
            <View style={trackHealthContainerStyles.helpMessageContainer}>
              <View style={{justifyContent: 'center', paddingRight: 12}}>
              <WhatsappIcon />
              </View>
              <Text style={trackHealthContainerStyles.helpMessageText}>
                {WHATSAPP_MESSAGE}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  trackHealth: formValues => dispatch(trackHealthAction(formValues)),
});

const mapStateToProps = state => ({
  trackHealthData: state?.trackHealth?.trackHealthData,
  errorText: state?.trackHealth?.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHealth);
