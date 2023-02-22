import {StyleSheet} from 'react-native';
import {BLACK, BUTTON, WHITE} from '../../shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenWrapper: {
    top: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  scrollContainer: {
    paddingBottom: 15,
  },
  scrollContainerIOS: {
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 26,
    lineHeight: 34,
    marginBottom: 10,
    color: BLACK,
    fontWeight: '400',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  Button: {
    backgroundColor: BUTTON.PRIMARY,
    paddingVertical: 15,
    borderRadius: 16,
    color: WHITE,
    alignSelf: 'center',
    width: '90%',
    height: 52,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  ButtonText: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    bottom: 18,
  },
  buttonContainerIOS: {
    // bottom: 10,
  },
});