import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    root: {
        padding: 10,


    },
    row: {
        marginVertical: 5

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    input: {
        padding: 5,
        backgroundColor: 'white',
        height: 45,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'lightgrey'

    },
    errorLabel: {
        color: 'red',
    }


});

export default styles;