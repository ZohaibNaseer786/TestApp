import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height

export default StyleSheet.create({
    imageBackgroungStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImageStyle: {
        height: 128,
        width: 128
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
        marginTop: 16
    },
});