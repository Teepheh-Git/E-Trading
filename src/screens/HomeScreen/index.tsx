import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem'
import products from '../../data/products'

const HomeScreen = ({searchValue}: { searchValue: string }) => {

    return (
        <View style={styles.page}>
            {/* {render product component} */}
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem item={item}/>}
                showsVerticalScrollindicator={false}


            />
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        padding: 10,

    },

});


export default HomeScreen;
