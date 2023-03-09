import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, WHITE} from '../../constants/colors';

export const appCardStyles = StyleSheet.create({
  cardTitle: {
    fontSize: 22,
    lineHeight: 24,
    marginBottom: 5,
    fontWeight: '500',
    color: BLACK,
  },
  cardDesc: {
    color: LIGHT_GREY,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    paddingBottom: 18,
  },
  cardTitleContainer: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    height: 34,
  },
  cardTitleText: {
    fontWeight: '500',
    fontSize: 16,
    color: BLACK,
    marginLeft: 12,
    marginVertical: 4,
    paddingRight: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
