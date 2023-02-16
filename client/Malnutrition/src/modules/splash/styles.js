import { StyleSheet } from "react-native";
import { BLACK } from "../../shared/constants/colors";
import { WORK_SANS_BLACK, WORK_SANS_REGULAR } from "../../shared/constants/fontFamilyConstants";

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: '100%', 
        width: '100%',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top: 349,
        left: 91,
        right: 91,

    },
    titleText: {
        fontSize: 34,
        fontWeight: '700',
        color: BLACK,
        textAlign: 'center'
        // fontFamily: WORK_SANS_BLACK
    },
    bodyText: {
        fontSize: 20,
        fontWeight: '600',
        color: BLACK,
    }
})

export default styles;