import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from "./homeStack";
import ShoppingCartStack from "./shoppingCartStack";

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
        return (
            <Tab.Navigator tabBarOptions={{showLabel: false, inactiveTintColor: '#e0a272', activeTintColor: '#e47911'}}>
                <Tab.Screen name={'Home'} component={HomeStack}
                            options={{
                                tabBarIcon: ({color}) => <Entypo name={"home"} color={color} size={25}/>
                            }}
                />
                <Tab.Screen name={'Profile'} component={HomeScreen}
                            options={{
                                tabBarIcon: ({color}) => <Entypo name={"user"} color={color} size={25}/>
                            }}/>
                <Tab.Screen name={'ShoppingCart'} component={ShoppingCartStack}
                            options={{
                                tabBarIcon: ({color}) => <Entypo name={"shopping-cart"} color={color} size={25}/>
                            }}/>
                <Tab.Screen name={'More'} component={HomeScreen} options={{
                    tabBarIcon: ({color}) => <Entypo name={"menu"} color={color} size={25}/>
                }}/>
            </Tab.Navigator>


        );
    }
;

export default BottomTabNav;
