import {StyleSheet} from 'react-native';
import {LIGHT_GREY} from '../../constants/colors';

export const appTextTranslateStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row-reverse',
  },
  languageIcon: {
    color: LIGHT_GREY,
    fontSize: 12,
    paddingRight: 20,
    justifyContent: 'center',
  },
  languageText: {
    fontSize: 14,
    lineHeight: 24,
    color: LIGHT_GREY,
    fontWeight: '500',
  },
});
