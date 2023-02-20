import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../constants/colors';

export const styles = StyleSheet.create({
  titleText: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#616568',
    top: 19,
    left: 15
  },
  inputField: {
    backgroundColor: WHITE,
    // padding: 10,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: '500',
    color: BLACK,
    width: 232,
    left: 13,
    height: 60
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '95%',
  },
});
