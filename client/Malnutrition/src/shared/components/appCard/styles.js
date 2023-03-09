import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, WHITE} from '../../constants/colors';

export const appCardStyles = StyleSheet.create({
<<<<<<< HEAD
  stageCard: {
    borderRadius: 16,
    borderColor: WHITE,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginBottom: 12,
    backgroundColor: '#E9EAF3',
  },
=======
  // stageCard: {
  //   borderRadius: 20,
  //   borderColor: WHITE,
  //   borderWidth: 4,
  //   paddingHorizontal: 20,
  //   paddingVertical: 25,
  //   marginBottom: 8,
  //   backgroundColor: background,
  // },
>>>>>>> 8fcfecb (added home screen card detail)
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
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: WHITE,
    borderRadius: 8,
  },
  cardTitleText: {
    fontWeight: '500',
    fontSize: 16,
    color: BLACK,
    marginLeft: 12,
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
