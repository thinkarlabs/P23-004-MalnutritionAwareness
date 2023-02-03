import {StyleSheet} from 'react-native';
import {BLACK, BLUE, GREEN, PINK, WHITE, YELLOW} from '../../shared/constants/colors';

export const styles = StyleSheet.create({
  pinkContainer: {
    flex: 1,
    backgroundColor: PINK,
  },
  greenContainer:{
    flex: 1,
    backgroundColor: GREEN,
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: YELLOW,
  },
  header: {
    flexDirection: 'row-reverse',
    paddingLeft: '5%',
  },
  headerContainer: {
    flexDirection: 'row-reverse',
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
    fontSize: 12,
    paddingRight: '5%',
    justifyContent: 'center',
  },
  languageText: {
    fontSize: 16,
    color: BLACK,
    fontWeight: '700',
  },
  contentContainer: {
    alignItems: 'center',

  },
  contentTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: BLACK,
    lineHeight: 28,
    paddingLeft: 50,
    paddingRight: 51,
    textAlign: 'center'
  },
  contentBody: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: BLACK,
    lineHeight: 24,
    flexGrow: 1,
    paddingTop: 13,
    paddingLeft: 25,
    paddingRight: 26,
  },
  circleContainer: {
    paddingTop: 47,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    paddingLeft: 158.5,
    paddingRight: 159.5,
  },
  circle: {
    height: 60,
    width: 60,
    backgroundColor: WHITE,
    borderRadius: 30,
    bottom: 40,
  },
  arrow: {
    bottom: '100%',
    fontSize: 20,
    color: BLUE,
    paddingLeft: 25,
    paddingRight: 21,
  },
});
