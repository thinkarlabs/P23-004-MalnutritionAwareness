import React from 'react';
import {Image, Platform, SafeAreaView, Text, View} from 'react-native';
import AppHeader from '../../shared/components/appHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import verifyOTPStyles from './styles';
import RnOtpTimer from 'rn-otp-timer';

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
import { styles } from 'react-native-floating-label-input/src/styles';

const OTPVerification = ({navigation}) => {
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
          <Text style={verifyOTPStyles.enterOtpText}>{ENTER_MOBILE_NUMBER}</Text>
          {/* <Text style={styles.phoneNumberText}>{route.params.phone}</Text> */}
        </Text>
        <View style={verifyOTPStyles.otpInputContainer}>
          <OTPInputView
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad={false}
            codeInputFieldStyle={verifyOTPStyles.codeInputField}
            style={verifyOTPStyles.otpText}
            // codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        {/* <View style={verifyOTPStyles.otpNotReceivedContainer}>
          <Text style={verifyOTPStyles.otpNotReceivedText}>{'Resend OTP in - '}</Text>
        </View>
        <RnOtpTimer
          minutes={0}
          seconds={30}
          resendButtonText="RESEND"
          resendButtonStyle={{bottom: bottom}}
          resendButtonTextStyle={{
            fontSize: 16,
            fontWeight: '500',
            color: PURPLE,
          }}
          timerStyle={{
            position: 'absolute',
            bottom: 334,
            left: 300,
            fontSize: 16,
            color: LIGHT_GREY,
            fontWeight: '400',
          }}
          resendButtonAction={() => {
            console.log('otp resent!');
          }}
        /> */}
        <View style={verifyOTPStyles.button}>
          <Button
            title={'Verify OTP'}
            textStyle={buttonStyles.buttonText}
            buttonStyle={[verifyOTPStyles.buttonContainer]}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default OTPVerification;
