import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 56,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    top: 16,
    bottom: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 8,
  },
  secondContainer: {
    flexDirection: 'row-reverse',
    bottom: 12,
    top: 12,
    backgroundColor: 'white',
    width: 57,
    height: 32,
    left: 298,
    right: 20,
    position: 'absolute',
  },
  secondTextContainer: {
    justifyContent: 'center',
  },
});
