import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, WHITE} from '../../shared/constants/colors';

const verifyOTPStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  headerContainer: {
    marginTop: 50,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 52,
  },
  phoneImage: {
    height: 119,
    width: 122,
    alignSelf: 'center',
  },
  otpHeadingContainer: {
    marginTop: 24,
    marginBottom: 8,
  },
  otpHeadingText: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
  enterOtpText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: LIGHT_GREY,
  },
  phoneNumberText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: LIGHT_GREY,
  },
  otpInputContainer: {
    backgroundColor: '#F2F5F7',
    height: '12%',
    marginTop: 20,
    paddingHorizontal: 39,
    marginHorizontal: 20,
    borderRadius: 16,
  },
  codeInputField: {
    backgroundColor: WHITE,
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 0,
    fontSize: 16,
    color: BLACK,
    fontWeight: '500',
  },
  otpText: {
    fontSize: 20,
  },
  otpNotReceivedContainer: {
    marginTop: 8,
    marginRight: 87,
    alignItems: 'flex-end',
  },
  otpNotReceivedText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#616568',
  },
  button: {width: '90%', left: 20, right: 20, top: 231},
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 67,
    paddingTop: 12,
  },
  resendTextBold: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#6667FF',
  },
  resendText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#616568',
  }
});

export default verifyOTPStyles;
