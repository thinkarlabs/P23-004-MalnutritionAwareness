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
    paddingBottom: 16,
    paddingTop: 8,
  },
  titleText: {
    fontWeight: '400',
    lineHeight: 31,
    fontSize: 26,
    color: BLACK,
    paddingBottom: 12
  },
  tabContainer: {
    flexDirection: 'row',
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
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
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
  contentText: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: BLACK,
    paddingBottom: 8,
  },
  detailCard: {
    backgroundColor: '#F1E99E',
    height: 140,
    borderRadius: 12,
  },
  detailCardText: {
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 24,
    padding: 16,
    paddingTop: 24,
    color: BLACK,
  },
  cardInstructionText: {
    paddingTop: 48,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: BLACK,
  },
});
