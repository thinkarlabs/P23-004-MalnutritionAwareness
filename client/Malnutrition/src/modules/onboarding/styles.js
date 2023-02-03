import {StyleSheet} from 'react-native';
import {BLACK, PINK} from '../../shared/Constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PINK,
  },
  header: {
    flexDirection: 'row-reverse',
    paddingLeft: '5%',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
    color: BLACK,
  },
  headerImage: {
    height: '50%',
    width: '100%',
  },
  languageIcon: {
    color: BLACK,
    fontSize: 10,
    justifyContent: 'center'
  },
});
