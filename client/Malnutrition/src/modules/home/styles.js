import {StyleSheet} from 'react-native';
import {BLACK} from '../../shared/constants/colors';

export const homeStyles = StyleSheet.create({
  container: {
    left: 20,
    right: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  headingText: {
    color: BLACK,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    left: 8,
  },
  homeTitle: {
    paddingTop: 100,
    paddingBottom: 12,
  },
  homeText : {
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 31,
    color: BLACK,
  },
  rowReverse: {
    
  }
});
