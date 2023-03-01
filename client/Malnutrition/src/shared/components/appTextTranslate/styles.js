import {StyleSheet} from 'react-native';
import { BLACK } from '../../constants/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row-reverse',
  },
  languageIcon: {
    color: BLACK,
    fontSize: 12,
    paddingRight: '5%',
    justifyContent: 'center',
  },
  languageText: {
    fontSize: 16,
    color: BLACK,
    fontWeight: '700',
  },
});
