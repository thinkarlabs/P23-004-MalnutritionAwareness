import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, WHITE} from '../../constants/colors';

export const styles = StyleSheet.create({
  stageCard: {
    borderRadius: 20,
    borderColor: WHITE,
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginBottom: 8,
    backgroundColor: '#E9EAF3',
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 5,
    fontWeight: '400',
    color: BLACK,
    alignSelf: 'stretch',
  },
  cardDesc: {
    color: LIGHT_GREY,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    alignSelf: 'stretch',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 12,
  },
  cardTitleText: {
    fontWeight: '700',
    fontSize: 16,
    color: BLACK,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
