import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import BottomTabNav from "./bottomTabNav";
import {createNativeStackNavigator} from "react-native-screens/native-stack";


const Root = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown: false}}>
                <Root.Screen name={'HomeTabs'} component={BottomTabNav}/>
            </Root.Navigator>

        </NavigationContainer>


    );
};

export default Router;