import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {withStyleAnimation} from 'react-native-reanimated/lib/types/lib/reanimated2/animation';
import {
  BLACK,
  PINK,
  LIGHT_GREEN,
  LIGHT_YELLOW,
  LIGHT_ORANGE,
  BUTTON,
  WHITE,
  RED,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
} from '../../../shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    fontSize: 26,
    lineHeight: 34,
    marginBottom: 10,
    color: BLACK,
    fontWeight: '400',
  },
  stageOne: {
    borderColor: LIGHT_GREEN,
  },
  stageTwo: {
    borderColor: LIGHT_YELLOW,
  },
  stageThree: {
    borderColor: LIGHT_ORANGE,
  },
  leftSpacer: {
    // paddingLeft: '40%',
  },
  rightSpacer: {
    paddingRight: '40%',
  },
  selectedStageCard: {
    borderRadius: 20,
    borderColor: 'rgba(181, 255, 210, 1)',
    borderWidth: 2,
    paddingVertical: 12,
    paddingRight: 18,
    paddingLeft: 65,
    marginBottom: 20,
  },
  selectedStageCardTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: BLACK,
  },
  selectedStageCardDesc: {
    fontSize: 14,
    lineHeight: 18,
    color: 'rgba(97, 101, 104, 1)',
  },
  Button: {
    backgroundColor: BUTTON.PRIMARY,
    paddingVertical: 15,
    borderRadius: 16,
    color: WHITE,
    alignSelf: 'center',
    width: '100%',
    height: 52,
  },
  ButtonText: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  ButtonInfo: {
    textAlign: 'center',
    color: LIGHT_GREY,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 25,
    position: 'absolute',
    bottom: 80,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formWrapper: {
    borderColor: PLACEHOLDER_BORDER_COLOR,
    padding: 20,
    borderRadius: 16,
    borderWidth : 1,
  },
  inputField: {
    backgroundColor: WHITE,
    padding: 14,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: '500',
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
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  checkbox: {
    backgroundColor: WHITE,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
  },
  stageWrapper: {
    flexGrow: 1,
  },
  dropdownWrapper: {
    marginLeft: 40,
  },
  errorMsg: {
    color: RED,
  },
  Info: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 82,
  },
  androidButtonContainer: {
    paddingTop: 52,
  },
  rowReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  iconTextInput: {
    backgroundColor: '#E9EAF3',
    height: 28,
    width: 28,
    borderRadius: 14,
    justifyContent: 'center',
    left: 12,
  },
});
