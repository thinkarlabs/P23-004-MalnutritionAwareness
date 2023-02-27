import { StyleSheet } from 'react-native';
import { BLACK, LIGHT_GREY, PLACEHOLDER_BORDER_COLOR } from '../../constants/colors';

export const appDropdownStyles = StyleSheet.create({
    container: {
      padding: 16,
      justifyContent: 'center',
      width: '100%',
      borderColor: PLACEHOLDER_BORDER_COLOR,
      borderWidth: 1,
      borderRadius: 12,
    },
    dropdown: {
      height: 40,
      borderColor: 'gray',
      //   borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 50,
      top: 8,
      fontSize: 14,
      fontWeight: '400',
      color: BLACK,
    },
    placeholderStyle: {
      fontSize: 18,
      color: LIGHT_GREY,
      fontWeight: '400',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: BLACK,
    },
    itemTextStyle: {
      fontSize: 18,
      fontWeight: '400',
      color: LIGHT_GREY,
    },
    itemContainer: {
      borderWidth: 1,
      borderColor: PLACEHOLDER_BORDER_COLOR,
      borderRadius: 12,
    },
  });