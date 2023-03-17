import {StyleSheet} from 'react-native';
import {
  BLACK,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
} from '../../../shared/constants/colors';

export const homeCardStyles = StyleSheet.create({
  scrollView: {
    height: '80%',
  },
  container: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  swipeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  titleText: {
    fontWeight: '400',
    lineHeight: 31,
    fontSize: 26,
    color: BLACK,
  },
  tabContainer: {
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  tabText: {
    flex: 1,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: LIGHT_GREY,
    paddingLeft: 16,
  },
  tabCardContainer: {
    paddingBottom: 8,
  },
  cardContainer: {
    paddingTop: 12,
  },
  carasoulContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
  },
  carasoulText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    paddingLeft: 9,
  },
});
