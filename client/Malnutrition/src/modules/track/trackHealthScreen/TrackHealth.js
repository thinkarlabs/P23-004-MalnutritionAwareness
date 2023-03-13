import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {trackHealthContainerStyles} from './styles';
import {TRACK_HEALTH, USER_DETAILS} from '../../../shared/constants/constants';
import {beneficiaryInfoStyles} from '../../createAccount/beneficiaryInfoScreen/styles';
import AppTextInput from '../../../shared/components/appTextInput';
import CalendarIcon from '../../../../assets/svg/icons/calendarIcon';
import {PLACEHOLDER_COLOR} from '../../../shared/constants/colors';
import { Button } from '../../../shared/components/button';
import { buttonStyles } from '../../../shared/components/button/styles';

const TrackHealth = () => {
  return (
    <View style={trackHealthContainerStyles.screenContainer}>
      <View style={trackHealthContainerStyles.inputContainer}>
        <Text style={trackHealthContainerStyles.inputTitle}>
          {TRACK_HEALTH.TITLE}
        </Text>
        <View style={beneficiaryInfoStyles.inputContainer}>
          <View style={beneficiaryInfoStyles.iconTextInput}>
            <CalendarIcon />
          </View>
          <AppTextInput
            placeholder={TRACK_HEALTH.PLACEHOLDER1}
            placeholderTextColor={PLACEHOLDER_COLOR}
            newStyles={beneficiaryInfoStyles.inputField}
            name="name"
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
            name="name"
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
            name="name"
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
            name="name"
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
            name="name"
          />
        </View>
        <Button
          title={TRACK_HEALTH.BUTTON}
          textStyle={buttonStyles.buttonText}
          buttonStyle={trackHealthContainerStyles.buttonContainer}
          disabledStyle={buttonStyles.disabled}
          // disabled={!isValidForm}
          // onPress={onPressCreateAccount}
        />
      </View>
    </View>
  );
};

export default TrackHealth;
