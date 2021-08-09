import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: '#faf7f0',

    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',


    },

    title: {
        margin: 5,
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',

    },

    price: {
        fontSize: 18,
        fontWeight: 'bold'

    },

    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },

    description: {
        marginVertical: 20,
        lineHeight: 22,
        fontSize: 18,


    },
    bottom: {
        height: 25
    }


})

export default styles;