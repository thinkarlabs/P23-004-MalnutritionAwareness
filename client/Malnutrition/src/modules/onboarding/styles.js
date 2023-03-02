import {StyleSheet} from 'react-native';
import {BLACK, GREEN, PINK, YELLOW} from '../../shared/constants/colors';
import {
  FONT_LARGE,
  FONT_MEDIUM,
  FONT_SMALL,
  TITLE_FONT_SIZE,
} from '../../shared/constants/fontSizeConstants';

export const onBoardingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pinkContainer: {
    flex: 1,
    backgroundColor: PINK,
  },
  greenContainer: {
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
    fontSize: FONT_MEDIUM,
    color: BLACK,
  },
  headerImage: {
    height: '50%',
    width: '100%',
    left: 50,
    top: 37,
  },
  headerImage2: {
    height: '50%',
    width: '100%',
    top: 37,
  },
  languageIcon: {
    color: BLACK,
    fontSize: FONT_SMALL,
    paddingRight: '5%',
    justifyContent: 'center',
  },
  languageText: {
    fontSize: FONT_MEDIUM,
    color: BLACK,
    fontWeight: '700',
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: TITLE_FONT_SIZE,
    fontWeight: '700',
    color: BLACK,
    lineHeight: 28,
    paddingLeft: 50,
    paddingRight: 51,
    textAlign: 'center',
  },
  contentBody: {
    textAlign: 'center',
    fontSize: FONT_LARGE,
    fontWeight: '400',
    color: BLACK,
    lineHeight: 24,
    flexGrow: 1,
    paddingTop: 13,
    paddingLeft: 25,
    paddingRight: 26,
  },
  circleContainer: {
    alignItems: 'center',
    bottom: 47,
  },
});
