import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native';
import CartProductItem from '../../components/CartProductItem'
import products from '../../data/cart'
import {useNavigation} from "@react-navigation/native";
import Button from "../../components/Button";

const ShoppingCartScreen = () => {
        const navigation = useNavigation()

        const onCheckout = () => {
            navigation.navigate('Address')
        }


        //to calc the total price of goods selected in the cart
        const totalPrice = products.reduce(
            (summedPrice, product) =>
                summedPrice + product.item.price * product.quantity, 0
        )


        return (
            <View style={styles.page}>


                {/* {render product component} */}
                <FlatList
                    data={products}
                    renderItem={({item}) => <CartProductItem cartItem={item}/>}
                    showsVerticalScrollindicator={false}
                    ListHeaderComponent={() => (
                        <View>
                            {/*render total price*/}
                            <Text style={{fontSize: 20,}}> Subtotal ({products.length} items) : {''}
                                <Text style={{color: '#e47911', fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text>
                            </Text>

                            {/*proceed to checkout button*/}
                            <Button text={"Proceed To Checkout"} onPress={onCheckout}
                                    containerStyles={{backgroundColor: '#f7e300', borderColor: '#f7e300'}}
                            />
                        </View>
                    )}

                />
            </View>
        );
    }
;


const styles = StyleSheet.create({
        page: {
            padding: 10,

        }
        ,

    }
);


export default ShoppingCartScreen;
