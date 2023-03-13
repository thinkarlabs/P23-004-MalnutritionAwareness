import {StyleSheet} from 'react-native';
import {
  BUTTON,
  PLACEHOLDER_BORDER_COLOR,
  WHITE,
} from '../../../shared/constants/colors';

export const trackHealthContainerStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  inputContainer: {
    height: 500,
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  inputTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 25,
    paddingBottom: 12,
  },
  buttonContainer: {
    marginTop: 12,
    backgroundColor: BUTTON.PRIMARY,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export const timelineStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
