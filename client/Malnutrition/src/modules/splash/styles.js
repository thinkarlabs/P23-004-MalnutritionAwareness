import {StyleSheet} from 'react-native';
import {BLACK} from '../../shared/constants/colors';
import {ENTYPO} from '../../shared/constants/fontFamilyConstants';
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
    fontWeight: '700',
    color: BLACK,
    textAlign: 'center',
    // fontFamily: WORK_SANS_BLACK
    fontFamily: ENTYPO,
  },
  bodyText: {
    fontSize: SPLASH_BODY_SIZE,
    fontWeight: '600',
    color: BLACK,
  },
  svgBackground: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default splashStyles;
