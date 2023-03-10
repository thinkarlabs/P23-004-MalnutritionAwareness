import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLUE,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
  RED,
  WHITE,
} from '../../shared/constants/colors';

const verifyOTPStyles = StyleSheet.create({
  scrollView: {
    height: '75%',
  },
  innerContainer: {
    paddingTop: 52,
    alignItems: 'center',
  },
  otpHeadingContainer: {
    marginTop: 24,
    marginBottom: 8,
  },
  otpHeadingText: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 34,
  },
  enterOtpText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: LIGHT_GREY,
  },
  phoneNumberText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: LIGHT_GREY,
    textAlign: 'center',
  },
  otpInputContainer: {
    paddingHorizontal: 60,
    height: 55,
  },
  codeInputField: {
    backgroundColor: WHITE,
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    fontSize: 18,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    color: BLACK,
    fontWeight: '400',
  },
  errorCodeInputField: {
    backgroundColor: 'rgba(248, 218, 218, 0.3)',
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    fontSize: 18,
    borderColor: RED,
    color: BLACK,
    fontWeight: '400',
  },
  otpText: {
    fontSize: 20,
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  resendContainer: {
    paddingRight: 60,
    paddingTop: 12,
  },
  resendTextBold: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: BLUE,
  },
  resendText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: LIGHT_GREY,
  },
  phoneNumberContainer: {
    marginBottom: 32,
  },
  errorText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: RED,
    paddingLeft: 60,
    paddingTop: 12,
  },
  successText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: 'green',
    paddingLeft: 60,
    paddingTop: 12,
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default verifyOTPStyles;
