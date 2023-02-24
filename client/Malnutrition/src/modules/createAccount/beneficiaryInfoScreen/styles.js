import {StyleSheet} from 'react-native';
import {
  BLACK,
  LIGHT_BLUE,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
  WHITE,
} from '../../../shared/constants/colors';

export const styles = StyleSheet.create({
  screenWrapper: {
    top: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 40,
  },
  titleText: {
    fontSize: 26,
    lineHeight: 34,
    marginBottom: 10,
    color: BLACK,
    fontWeight: '400',
  },
  selectedStageCard: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingRight: 18,
    paddingLeft: 65,
    marginBottom: 20,
    backgroundColor: LIGHT_BLUE,
    height: 80,
  },
  selectedStageCardTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: BLACK,
    fontWeight: '500',
  },
  selectedStageCardDesc: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(97, 101, 104, 1)',
  },
  boxContainer: {
    top: 12,
  },
  formWrapper: {
    borderColor: PLACEHOLDER_BORDER_COLOR,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    top: 12,
  },
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  iconTextInput: {
    left: 12,
  },
  inputField: {
    backgroundColor: WHITE,
    padding: 14,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: '400',
    color: BLACK,
    width: 232,
    left: 13,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '400',
    color: LIGHT_GREY,
  },
  checkbox: {
    backgroundColor: WHITE,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
  },
  dropdownWrapper: {
    top: 8,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  androidButtonContainer: {
    paddingTop: 32,
  },
  info: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: LIGHT_GREY,
    paddingTop: 10,
  },
  iconContainer: {
    justifyContent: 'center',
  },
});
