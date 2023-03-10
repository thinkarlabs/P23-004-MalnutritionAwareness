import { StyleSheet } from 'react-native';
import { JumpingTransition } from 'react-native-reanimated';
import { BLACK, LIGHT_GREY, PLACEHOLDER_BORDER_COLOR } from '../../../shared/constants/colors';

export const homeCardStyles = StyleSheet.create({
    container: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    titleText: {
        fontWeight: '400',
        lineHeight: 31,
        fontSize: 26,
        color: BLACK,
    },
    tabContainer: {
        borderWidth: 1,
        borderColor: PLACEHOLDER_BORDER_COLOR,
        // height: 88,
        // width: 335,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 14,
        paddingTop: 8,
        paddingBottom: 8,
    },
    tabText: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 24,
        color: LIGHT_GREY,
        paddingLeft: 16,
    },
    tabCardContainer: {
        paddingBottom: 8,
    },
    cardContainer: {
        paddingTop: 12,
    },
    carasoulContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12,
    },
    carasoulText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 24,
        paddingLeft: 9
    },
})