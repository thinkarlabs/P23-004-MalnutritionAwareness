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
} from '../../shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 26,
    lineHeight: 34,
    marginBottom: 22,
  },
  stageCard: {
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginBottom: 20,
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
    paddingLeft: '40%',
  },
  rightSpacer: {
    paddingRight: '40%',
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 5,
    fontWeight: '400',
    color: '#111112',
    alignSelf: 'stretch',
  },
  cardDesc: {
    color: '#616568',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    alignSelf: 'stretch',
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
    color: '#111112',
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
    color: '#ffffff',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 25,
    width: '100%',
  },
  ButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  ButtonInfo: {
    textAlign: 'center',
    color: '#616568',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 25,
    position: 'absolute',
    bottom: 80,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  formWrapper: {
    backgroundColor: '#F2F5F7',
    padding: 20,
    borderRadius: 16,
  },
  inputField: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#111112',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  checkbox: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  stageWrapper: {
    flexGrow: 1,
  },
  dropdownWrapper: {
    marginLeft: 40,
  },
  errorMsg: {
    color: '#E32828',
  },
});
