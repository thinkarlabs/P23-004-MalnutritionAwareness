import React from 'react';
import {Image, Text, View} from 'react-native';
import AppButton from '../../shared/components/appButton';
import AppHeader from '../../shared/components/appHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {
  CONFIRM,
  DID_NOT_RECEIVE_OTP,
  ENTER_MOBILE_NUMBER,
  MOBILE_NUMBER,
  OTP_VERIFICATION,
  RESEND,
  VERIFY_OTP,
} from '../../shared/constants/constants';

const OTPVerification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader navigation canGoBack title={VERIFY_OTP} />
      <View style={styles.innerContainer}>
        <Image
          source={require('../../../assets/images/verifyOtp.png')}
          style={styles.phoneImage}
        />
        <View style={styles.otpHeadingContainer}>
          <Text style={styles.otpHeadingText}>{OTP_VERIFICATION}</Text>
        </View>
        <Text>
          <Text style={styles.enterOtpText}>{ENTER_MOBILE_NUMBER}</Text>
          <Text style={styles.phoneNumberText}>{MOBILE_NUMBER}</Text>
        </Text>
        <View style={styles.otpInputContainer}>
          <OTPInputView
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.codeInputField}
            style={styles.otpText}
            // codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <View style={styles.otpNotReceivedContainer}>
          <Text>
            <Text style={styles.otpNotReceivedText}>{DID_NOT_RECEIVE_OTP}</Text>
            <Text style={styles.resendText}>{RESEND}</Text>
          </Text>
        </View>
      </View>
      <AppButton title={CONFIRM} />
    </View>
  );
};

export default OTPVerification;
