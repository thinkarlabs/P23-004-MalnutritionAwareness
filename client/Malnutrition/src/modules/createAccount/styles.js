import {StyleSheet} from 'react-native';
import {withStyleAnimation} from 'react-native-reanimated/lib/types/lib/reanimated2/animation';
import {
  BLACK,
  PINK,
  LIGHT_GREEN,
  LIGHT_YELLOW,
  LIGHT_ORANGE,
  BUTTON,
} from '../../shared/Constants/colors';

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
    marginBottom: 22,
  },
  stageCard: {
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
    padding: 20,
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
    lineHeight: 27,
    marginBottom: 5,
    color: '#111112',
  },
  cardDesc: {
    color: '#616568',
    fontSize: 16,
    lineHeight: 22,
  },
  Button: {
    backgroundColor: BUTTON.PRIMARY,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 16,
    color: '#ffffff',
  },
  ButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
