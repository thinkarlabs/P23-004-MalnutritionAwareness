import {StyleSheet} from 'react-native';
import {
  FOCUSED_TAB_ICON,
  LIGHT_GREY,
  WHITE,
} from '../../shared/constants/colors';

export const askStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    paddingBottom: 30,
  },
  textStyle: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
    textAlign: 'center',
  },
  phoneNumber: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: FOCUSED_TAB_ICON,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
});
