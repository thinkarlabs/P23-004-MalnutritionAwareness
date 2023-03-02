import {StyleSheet} from 'react-native';
import {LIGHT_GREY} from '../../constants/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row-reverse',
  },
  languageIcon: {
    color: LIGHT_GREY,
    fontSize: 12,
    paddingRight: '5%',
    justifyContent: 'center',
  },
  languageText: {
    fontSize: 16,
    color: LIGHT_GREY,
    fontWeight: '400',
  },
});
