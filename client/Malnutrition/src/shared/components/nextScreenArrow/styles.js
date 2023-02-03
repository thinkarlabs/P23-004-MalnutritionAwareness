import { StyleSheet } from 'react-native';
import { BLUE, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
    circleContainer: {
        paddingTop: 47,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        paddingLeft: 158.5,
        paddingRight: 159.5,
      },
      circle: {
        height: 60,
        width: 60,
        backgroundColor: WHITE,
        borderRadius: 30,
        bottom: 40,
      },
      arrow: {
        bottom: '100%',
        fontSize: 20,
        color: BLUE,
        paddingLeft: 25,
        paddingRight: 21,
      },
})