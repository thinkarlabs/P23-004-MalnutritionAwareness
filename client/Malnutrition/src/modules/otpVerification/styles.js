import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../shared/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerContainer: {
    flex: 1,
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
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
  enterOtpText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  phoneNumberText: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
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
    marginRight: 20,
    alignItems: 'flex-end',
  },
  otpNotReceivedText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#616568',
  },
  resendText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#1066EC',
  },
});

export default styles;
