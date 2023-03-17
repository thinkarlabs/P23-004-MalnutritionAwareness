import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, WHITE, RED} from '../../constants/colors';

export const appCardStyles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderColor: WHITE,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
  },
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
  textPadding: {
    paddingBottom: 18,
  },
  cardText: {
    color: LIGHT_GREY,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
  },
  warningText: {
    color: RED,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
  },
  addChildDetailsView: {
    backgroundColor: WHITE,
    borderRadius: 8,
    maxWidth: '95%',
  },
  cardTitleView: {
    backgroundColor: WHITE,
    borderRadius: 8,
    maxWidth: '70%',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cardTitleText: {
    fontWeight: '500',
    fontSize: 16,
    color: BLACK,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageView: {
    flex: 0.4,
    alignItems: 'center',
    marginRight: 15,
  },
  titleView: {
    flex: 1,
  },
});
