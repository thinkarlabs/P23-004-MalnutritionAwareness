import {StyleSheet} from 'react-native';
import {BLACK} from '../../constants/colors';

export const appHeaderStyles = StyleSheet.create({
  container: {
    height: 56,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backIcon: {
    paddingRight: 8,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 32,
    color: BLACK,
  },
  backText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: BLACK,
    marginRight: 16,
  },
  secondContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-start',
  },
  onBoarding: {
    flexDirection: 'row-reverse',
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-start',
  },
  headerSubText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  }
});
