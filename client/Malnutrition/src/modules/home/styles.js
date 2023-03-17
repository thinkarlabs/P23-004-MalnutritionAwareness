import {StyleSheet} from 'react-native';
import {BLACK, PROFILE, WHITE} from '../../shared/constants/colors';

export const homeStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: WHITE,
  },
  scrollView: {
    height: '75%',
  },
  container: {
    marginHorizontal: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  headingText: {
    color: BLACK,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    left: 8,
  },
  homeText: {
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 31,
    color: BLACK,
  },
  rowReverse: {},
  profile: {
    backgroundColor: PROFILE,
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
