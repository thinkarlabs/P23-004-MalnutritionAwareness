import {StyleSheet} from 'react-native';
import {
  BLACK,
  BUTTON,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
  RED,
} from '../../shared/constants/colors';

export const loginStyles = StyleSheet.create({
  screenWrapper: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  scrollView: {
    height: '75%',
  },
  loginTitle: {
    paddingTop: 13,
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 34,
    color: BLACK,
  },
  loginContent: {
    paddingTop: 4,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
    textAlign: 'justify',
  },
  detailContainer: {
    paddingTop: 52,
  },
  detailText: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
  },
  detailTextBold: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    alignItems: 'center',
    height: 60,
    paddingLeft: 12,
    borderRadius: 12,
    marginTop: 4,
  },
  inputField: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    marginLeft: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  info: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 34,
    color: LIGHT_GREY,
  },
  infoBold: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 34,
    color: BUTTON.PRIMARY,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: RED,
    marginHorizontal: 20,
    marginTop: 12,
  },
});
