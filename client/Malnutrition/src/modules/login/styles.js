import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {
  BLACK,
  BUTTON,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
  WHITE,
} from '../../shared/constants/colors';

export const loginStyles = StyleSheet.create({
  container: {
    left: 20,
    right: 20,
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
    width: '90%',
    alignItems: 'center',
    height: 60,
    paddingLeft: 12,
    borderRadius: 12,
  },
  inputField: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 46,
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
    alignItems: 'center'
  }
});
