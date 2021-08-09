import React, {useState} from 'react';
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {SafeAreaView, Text, TextInput, View} from "react-native";
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator()

interface HeaderComponentProps {
    searchValue: String;
    setSearchValue: () => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) => {

    return (
        <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
            <View
                style={{
                    backgroundColor: '#fff',
                    margin: 10,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#c9b6b6',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                <Feather style={{margin: 5}} name={'search'} size={20}/>

                <TextInput
                    style={{
                        height: 40,
                        fontSize: 18,
                    }}
                    placeholder={" Search...."}
                    value={searchValue}
                    onChangeText={setSearchValue}/>

            </View>
        </SafeAreaView>
    );
}

const HomeStack = () => {

    const [searchValue, setSearchValue] = useState('');

    return (

        <Stack.Navigator

            screenOptions={{
                header: () =>
                    <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
            }}>


            <Stack.Screen name={'HomeScreen'}
                          options={{title: "Home"}}>

                {() => <HomeScreen searchValue={searchValue}/>}
            </Stack.Screen>


            <Stack.Screen name={'ProductDetails'} component={ProductScreen} options={{title: "Product Details"}}/>


        </Stack.Navigator>


    );
};

export default HomeStack;