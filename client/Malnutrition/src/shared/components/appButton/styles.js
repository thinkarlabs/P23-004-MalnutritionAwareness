import {StyleSheet} from 'react-native';
import {BLUE, WHITE} from '../../constants/colors';

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 500,
    color: WHITE,
    textAlign: 'center',
  },
  containerStyle: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: BLUE,
    paddingVertical: 14,
    borderRadius: 14,
    opacity: 0.4,
  },
});
