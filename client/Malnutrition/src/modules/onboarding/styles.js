import {StyleSheet} from 'react-native';
import {BLACK, GREEN, PINK, YELLOW} from '../../shared/constants/colors';

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
  headerImage: {
    position: 'absolute',
    right: 0,
    top: 130,
  },
  headerImage2: {
    position: 'absolute',
    left: 0,
    top: 130,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 350,
  },
  contentTitle: {
    fontSize: 26,
    fontWeight: '400',
    color: BLACK,
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 13,
  },
  contentBody: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: BLACK,
    lineHeight: 24,
  },
  circleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 27,
  },
});
