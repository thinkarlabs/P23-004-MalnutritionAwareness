import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import AppHeader from '../../shared/components/appHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import verifyOTPStyles from './styles';
import {
  ENTER_MOBILE_NUMBER,
  OTP_VERIFICATION,
  CREATE_ACCOUNT,
  RESEND_OTP,
  RESEND_OTP_IN,
  VERIFY_OTP,
} from '../../shared/constants/constants';
import {
  HOME,
  LOGIN,
  PREGNANTWOMAN_SCREEN,
} from '../../shared/constants/navigatorConstants';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import {
  otpVerification as otpVerificationAction,
  resendOTP as resendOTPAction,
  hideError as hideErrorAction,
} from './Actions';
import {connect} from 'react-redux';
import {LIGHT_GREY} from '../../shared/constants/colors';
import OtpIllustrationSVG from '../../../assets/svg/otpIllustrationSVG';

const OTPVerification = ({
  navigation,
  route,
  otpVerification,
  verifyOtpData,
  resendOtpData,
  errorText,
  resendOtp,
  hideError,
}) => {
  const pinCount = 4;
  const [count, setCount] = useState(30);
  const [isValidForm, setIsValidForm] = useState(false);

  const [formValues, setFormValues] = useState({
    phone_number: route?.params?.phone_number,
    otp: '',
    is_creation: route?.params?.is_creation,
  });

  const updateOtpNumber = newVal => {
    hideError();
    setFormValues({...formValues, otp: newVal});
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    if (verifyOtpData && !errorText) {
      navigation.navigate(HOME);
    }
  });

  useMemo(() => {
    if (formValues?.otp && formValues?.otp?.length === pinCount) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [formValues.otp]);

  const verifyOtp = () => {
    setCount(0);
    otpVerification(formValues);
  };

  const onPressResendOtp = () => {
    setCount(30);
    hideError();
    resendOtp(formValues);
  };

  return (
    <SafeAreaView>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={
          route?.params?.fromWhere === CREATE_ACCOUNT.CATEGORY_1_TITLE
            ? () =>
                navigation.navigate(PREGNANTWOMAN_SCREEN, {
                  title: CREATE_ACCOUNT.CATEGORY_1_TITLE,
                })
            : () => navigation.navigate(LOGIN)
        }
      />
      <ScrollView style={verifyOTPStyles.scrollView}>
        <View style={verifyOTPStyles.innerContainer}>
          <OtpIllustrationSVG />
          <View style={verifyOTPStyles.otpHeadingContainer}>
            <Text style={verifyOTPStyles.otpHeadingText}>
              {OTP_VERIFICATION}
            </Text>
          </View>
          <View style={verifyOTPStyles.phoneNumberContainer}>
            <Text style={verifyOTPStyles.enterOtpText}>
              {ENTER_MOBILE_NUMBER}
            </Text>
            <Text style={verifyOTPStyles.phoneNumberText}>
              {route?.params?.phone_number}
            </Text>
          </View>
        </View>
        <View style={verifyOTPStyles.otpInputContainer}>
          <OTPInputView
            pinCount={pinCount}
            autoFocusOnLoad={false}
            codeInputFieldStyle={
              errorText
                ? verifyOTPStyles.errorCodeInputField
                : verifyOTPStyles.codeInputField
            }
            style={verifyOTPStyles.otpText}
            onCodeChanged={updateOtpNumber}
            placeholderCharacter={'-'}
            placeholderTextColor={LIGHT_GREY}
          />
        </View>
        <View style={verifyOTPStyles.centerContainer}>
          {errorText ? (
            <Text style={verifyOTPStyles.errorText}>{errorText}</Text>
          ) : (
            <Text>{''}</Text>
          )}
          <View style={verifyOTPStyles.resendContainer}>
            {count === 0 ? (
              <Text
                style={verifyOTPStyles.resendTextBold}
                onPress={onPressResendOtp}>
                {RESEND_OTP}
              </Text>
            ) : (
              <Text style={verifyOTPStyles.resendText}>
                {RESEND_OTP_IN + count}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={verifyOTPStyles.button}>
        <Button
          title={VERIFY_OTP}
          textStyle={buttonStyles.buttonText}
          buttonStyle={buttonStyles.container}
          disabledStyle={buttonStyles.disabled}
          disabled={!isValidForm}
          onPress={verifyOtp}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  otpVerification: formValues => dispatch(otpVerificationAction(formValues)),
  resendOTP: formValues => dispatch(resendOTPAction(formValues)),
  hideError: () => dispatch(hideErrorAction()),
});

const mapStateToProps = state => ({
  verifyOtpData: state.otpVerification.verifyOtpData,
  resendOtpData: state.otpVerification.resendOtpData,
  errorText: state.otpVerification.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(OTPVerification);
