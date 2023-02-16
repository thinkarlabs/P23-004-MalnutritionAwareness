import { StyleSheet } from 'react-native';
import { BLUE, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
      circle: {
        height: 60,
        width: 60,
        backgroundColor: WHITE,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      },
      arrow: {
        fontSize: 20,
        color: BLUE,
      },
      progressCircle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
});
