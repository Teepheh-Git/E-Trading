import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View} from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import countryList from 'country-list'
import {Picker} from "@react-native-picker/picker";

const AddressScreen = () => {

    //after importing the country list package, we set this function to get the list of all the data,
    // and call suing value and label in picker.item
    const countries = countryList.getData()

    // this useState is used whenever we want the picker to select any country picked( keeping it in memory)
    const [country, setCountry] = useState(countries[0].code);

    //this useState is for storing and sending the value of the text input
    const [fullName, setFullName] = useState('');

    //this useState is for storing and sending the value of the phone input
    const [phone, setPhone] = useState('');

    //this useState is for storing and sending the value of the phone input
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    // this useState is for storing and sending the value of the phone input
    const [city, setCity] = useState('');

    // !fullName means "if fullName is an empty string"
    const onCheckout = () => {
        if (!fullName) {
            Alert.alert('Please fill in the full name');
            return;
        }
        if (!phone) {
            Alert.alert('Please fill in phone number');
            return;
        }

        console.warn('success')
    }

    const validateAddress = () => {

        if (address.length < 5) {
            setAddressError('Address is too short')
        }
        if (address.length > 45) {
            setAddressError('Address is too long')
        }
    }


    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                              keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
            <ScrollView style={styles.root}>

                {/*country picker*/}
                <View style={styles.row}>
                    <Picker selectedValue={country} onValueChange={setCountry}>
                        {countries.map(country => (
                            <Picker.Item value={country.code} label={country.name}/>
                        ))}
                    </Picker>
                </View>

                {/* full name */}
                <View style={styles.row}>
                    <Text style={styles.label}> Full Name(First and Last Name)</Text>
                    <TextInput style={styles.input} placeholder={'Full Name'} value={fullName}
                               onChangeText={setFullName}/>

                </View>

                {/* phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}> Phone Number</Text>
                    <TextInput style={styles.input} placeholder={'Phone Number'} value={phone} onChangeText={setPhone}
                               keyboardType={'phone-pad'}/>

                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}> Address</Text>
                    <TextInput style={styles.input}
                               placeholder={'Address'}
                               value={address}
                               onEndEditing={validateAddress}
                               onChangeText={text => {
                                   setAddress(text);
                                   setAddressError('');

                               }}

                    />
                    {!!addressError && (<Text style={styles.errorLabel}>{addressError}</Text>)}

                </View>

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}> City</Text>
                    <TextInput style={styles.input} placeholder={'City'} value={city} onChangeText={setCity}
                    />
                </View>

                <Button text={'Checkout'} onPress={onCheckout}/>


            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddressScreen;



