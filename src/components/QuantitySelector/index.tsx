import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const QuantitySelector = ({ quantity, setQuantity }) => {

    const onMinus = () => {
        setQuantity(Math.max(1, quantity - 1));

    }
    const onPlus = () => {
        setQuantity(quantity + 1);

    }

    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>

        </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 130,
        justifyContent: 'space-between'

    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'



    },
    buttonText: {
        fontSize: 18,
        color: 'black'

    },
    quantity: {
        color: '#007eb9'


    },




})
