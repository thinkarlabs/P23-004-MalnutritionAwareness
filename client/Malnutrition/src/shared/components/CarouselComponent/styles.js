const {StyleSheet} = require('react-native');
const {ITEM_WIDTH} = require('.');

export const carouselStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ITEM_WIDTH - 30,
    borderWidth: 1,
    borderColor: '#DBDDEB',
    borderRadius: 16,
    flex: 1,
  },
  image: {
    height: 200,
    width: undefined,
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 16,
    marginTop: 16,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#111112',
    fontSize: 18,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'center',
  },
});
