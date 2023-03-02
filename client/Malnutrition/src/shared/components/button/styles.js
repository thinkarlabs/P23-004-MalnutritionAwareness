import { StyleSheet } from 'react-native';
import { PURPLE, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      backgroundColor: PURPLE,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
    title: {
      color: WHITE,
      fontSize: 16,
    },
    buttonWithSpinner: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#B9345A',
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '400',
      color: WHITE,
    },
  });