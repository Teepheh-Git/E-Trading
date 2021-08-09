import React from 'react'
import {ScrollView, Text, View} from 'react-native';
import {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {useRoute} from "@react-navigation/native";
import styles from './styles';
import product from '../../data/product'
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <ScrollView style={styles.root}>

            {/* title */}
            <Text style={styles.title}>{product.title}</Text>


            {/* image carousel */}
            <ImageCarousel images={product.images}/>


            {/* option selector */}

            <Text style={styles.text}>COLOR:</Text>


            <Picker style={styles.picker}
                    selectedValue={selectedOption}
                    onValueChhange={(itemValue) => setSelectedOption(itemValue)}>


                {product.options.map(options => (<Picker.Item label={options} value={options}/>
                ))}
            </Picker>


            {/* price */}
            <Text style={styles.price}>from ${product.price} {' '}
                {product.oldPrice && (<Text style={styles.oldPrice}>${product.oldPrice}</Text>)}
            </Text>

            {/* description */}

            <Text style={styles.description}>{product.description}</Text>

            {/* quantity selector */}

            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            {/* button */}
            <Button
                text={'Add To Cart'}
                onPress={() => {
                    console.warn('Add to cart')
                }}
                // @ts-ignore
                containerStyles={{backgroundColor: '#e3c905'}}/>

            <Button text={'Buy Now'} onPress={() => {
                console.warn('Buy now')
            }}/>

            <View style={styles.bottom}>


            </View>

        </ScrollView>
    )
}


export default ProductScreen


