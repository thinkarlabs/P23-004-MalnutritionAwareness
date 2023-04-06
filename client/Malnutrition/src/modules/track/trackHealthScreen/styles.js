import {StyleSheet} from 'react-native';
import {
  BLACK,
  BUTTON,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
  PLACEHOLDER_COLOR,
  WHITE,
} from '../../../shared/constants/colors';

export const trackHealthContainerStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  inputContainer: {
    height: 550,
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
  helpMessageContainer: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: PLACEHOLDER_BORDER_COLOR,
  },
  helpMessageText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: PLACEHOLDER_COLOR,
  },
  successText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: 'green',
  },
});

export const timelineStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  innerContainer: {
    paddingBottom: 30,
  },
  heading: {
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 30,
    color: BLACK,
    textAlign: 'center',
    paddingBottom: 8,
  },
  text: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
    textAlign: 'center',
  },
  topContainer: {
    flexDirection: 'row',
  },
  boxContainer: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    padding: 16
  },
  boxTitleContainer: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 25,
    color: BLACK,
    paddingLeft: 5,
  },
  errorContainer: {
    backgroundColor: '#F5A300',
    borderRadius:7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '20%'
  },
  errorTitle: {
    color: WHITE,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
  },
  navigationContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  navigationText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 26,
    color: '#6667FF'
  }
});
