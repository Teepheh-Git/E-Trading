import React from 'react';
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AddressScreen from "../screens/AddressScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";


const Stack = createNativeStackNavigator()

const ShoppingCartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Cart'} component={ShoppingCartScreen} options={{title: "Shopping Cart"}}/>
            <Stack.Screen name={'Address'} component={AddressScreen} options={{title: "Address "}}/>
        </Stack.Navigator>


    );
};

export default ShoppingCartStack;