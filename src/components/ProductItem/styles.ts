import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 3,
        borderWidth: 1,
        color: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    image: {
        flex: 2,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },

    rightContainer: {
        flex: 3,
        padding: 10,

    },

    title: {
        fontSize: 18,
        fontWeight:'bold',


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

    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,

    },

    star: {
        margin: 2,
    }


});

export default styles;