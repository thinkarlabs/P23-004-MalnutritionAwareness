import {StyleSheet} from 'react-native';
import {BUTTON, WHITE} from '../../constants/colors';

export const buttonStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: BUTTON.PRIMARY,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  disabled: {
    marginTop: 20,
    backgroundColor: BUTTON.PRIMARY_DISABLED,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title: {
    color: WHITE,
    fontSize: 16,
  },
  buttonText: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
