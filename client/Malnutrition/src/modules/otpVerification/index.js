import React, {useEffect, useState} from 'react';
import {Image, Platform, SafeAreaView, Text, View} from 'react-native';
import AppHeader from '../../shared/components/appHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import verifyOTPStyles from './styles';
import {
  CONFIRM,
  DID_NOT_RECEIVE_OTP,
  ENTER_MOBILE_NUMBER,
  MOBILE_NUMBER,
  OTP_VERIFICATION,
  RESEND,
  VERIFY_OTP,
  CREATE_ACCOUNT,
} from '../../shared/constants/constants';
import {
  CREATEACCOUNT,
  PREGNANTWOMAN_SCREEN,
} from '../../shared/constants/navigatorConstants';
import {LIGHT_GREY, PURPLE} from '../../shared/constants/colors';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import {styles} from 'react-native-floating-label-input/src/styles';
import {otpVerification} from './Action';
import {connect} from 'react-redux';

const OTPVerification = ({navigation, route, otpVerification}) => {
  const [otpValues, setOtpValues] = useState('');
  const [count, setCount] = useState(30);

  const [formValues, setFormValues] = useState({
    phone_number: route.params.phone_number,
    otp: '',
    is_creation: route.params.is_creation,
  });

  const updateOtpNumber = newVal => {
    setFormValues({...formValues, otp: newVal});
  };

  const verifyOtp = () => {
    otpVerification(formValues, navigation);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <View style={verifyOTPStyles.container}>
      <View style={verifyOTPStyles.headerContainer}>
        <AppHeader
          title={CREATE_ACCOUNT.TITLE_SCREEN}
          backArrowValue={true}
          onPress={() => navigation.navigate(CREATEACCOUNT)}
        />
      </View>
      <View style={verifyOTPStyles.innerContainer}>
        <Image
          source={require('../../../assets/images/verifyOtp.png')}
          style={verifyOTPStyles.phoneImage}
        />
        <View style={verifyOTPStyles.otpHeadingContainer}>
          <Text style={verifyOTPStyles.otpHeadingText}>{OTP_VERIFICATION}</Text>
        </View>
        <Text>
          <Text style={verifyOTPStyles.enterOtpText}>
            {ENTER_MOBILE_NUMBER}
          </Text>
          <Text style={verifyOTPStyles.phoneNumberText}>
            {route.params.phone_number}
          </Text>
        </Text>
        <View style={verifyOTPStyles.otpInputContainer}>
          <OTPInputView
            pinCount={4}
            autoFocusOnLoad={false}
            codeInputFieldStyle={verifyOTPStyles.codeInputField}
            style={verifyOTPStyles.otpText}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            onCodeChanged={updateOtpNumber}
          />
        </View>
        <View style={verifyOTPStyles.resendContainer}>
          {count == 0 ? (
            <Text style={verifyOTPStyles.resendTextBold} onPress={() => setCount(30)}>Resend OTP</Text>
          ) : (
            <Text style={verifyOTPStyles.resendText}>Resend OTP in -</Text>
          )}
          {count !== 0 && (
            <Text style={verifyOTPStyles.resendText}> {count}</Text>
          )}
        </View>
        <View style={verifyOTPStyles.button}>
          <Button
            title={'Verify OTP'}
            textStyle={buttonStyles.buttonText}
            buttonStyle={[verifyOTPStyles.buttonContainer]}
            onPress={verifyOtp}
          />
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  otpVerification: (formValues, navigation) =>
    dispatch(otpVerification(formValues, navigation)),
});

export default connect(null, mapDispatchToProps)(OTPVerification);
