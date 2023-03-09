import {StyleSheet} from 'react-native';
import {BLACK} from '../../shared/constants/colors';
import {
  SPLASH_BODY_SIZE,
  SPLASH_TITLE_SIZE,
} from '../../shared/constants/fontSizeConstants';

const splashStyles = StyleSheet.create({
  header: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 349,
    left: 91,
    right: 91,
  },
  titleText: {
    fontSize: SPLASH_TITLE_SIZE,
    fontWeight: '400',
    color: BLACK,
    textAlign: 'center',
    lineHeight: 46,
  },
  bodyText: {
    fontSize: SPLASH_BODY_SIZE,
    fontWeight: '400',
    color: '#797C8B',
    lineHeight: 24,
  },
  svgBackground: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default splashStyles;
