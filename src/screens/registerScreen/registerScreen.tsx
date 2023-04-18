import React, {useState} from "react";
import {View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { registerStyles } from "./registerStyles";
import registerLogo from "../../../assets/register.png";
import facebook from "../../../assets/Facebook.png";
import google from "../../../assets/Google.png";
import apple from "../../../assets/Apple.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import DatePicker from "react-native-date-picker";


export default function Register ({navigation}) {


    const onLoginPressed = () => {
        navigation.navigate('Login Screen')
    }

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    

    return(
        <ScrollView>
        <SafeAreaView style={registerStyles.container}>
            <View style={{paddingHorizontal: 20}}>
                <View style={registerStyles.imageContainer}>
                    <Image
                    style={registerStyles.image}
                    source={registerLogo}
                    />
                </View>
                <Text style={registerStyles.text}>Register</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 40, }}>
                    <TouchableOpacity style={{borderWidth: 2, borderRadius: 10, borderColor: '#ddd', paddingVertical: 10, paddingHorizontal: 30}}>
                        <Image 
                        style={registerStyles.cLogo}
                        source={facebook}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 2, borderRadius: 10, borderColor: '#ddd', paddingVertical: 10, paddingHorizontal: 30}}>
                        <Image 
                        style={registerStyles.cLogo}
                        source={google}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 2, borderRadius: 10, borderColor: '#ddd', paddingVertical: 10, paddingHorizontal: 30}}>
                        <Image
                        style={registerStyles.cLogo} 
                        source={apple}
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={registerStyles.icon_textinput}>
                    <Ionicons 
                    style={registerStyles.icon}
                    name="person-outline" size={25} color="#666"/>
                    <TextInput
                    style={registerStyles.input}
                    placeholder="Enter full name"
                    keyboardType="email-address"
                    />
                </View>
                <View style={registerStyles.icon_textinput}>
                    <MaterialIcons 
                    style={registerStyles.icon}
                    name="alternate-email" size={25} color="#666"/>
                    <TextInput
                    style={registerStyles.input}
                    placeholder="Email ID"
                    secureTextEntry={true}
                    />
                </View>

                <View style={registerStyles.icon_textinput}>
                <Feather 
                    style={registerStyles.icon}
                    name="lock" size={25} color="#666"/>
                    <TextInput
                    style={registerStyles.input}
                    placeholder="Enter Password"
                    keyboardType="email-address"
                    />
                </View>
                <View style={registerStyles.icon_textinput}>
                    <Feather 
                    style={registerStyles.icon}
                    name="lock" size={25} color="#666"/>
                    <TextInput
                    style={registerStyles.input}
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    />
                </View>
                
                <View style={registerStyles.icon_textinput}>
                    <Fontisto 
                    style={registerStyles.icon}
                    name="date" size={25} color="#666"/>
                    <TouchableOpacity
                    onPress={() => setOpen(true)}
                    >
                        <Text style={{fontSize: 18, color: 'gray', marginLeft: 5, marginBottom:5}}>Date of birth</Text>
                    </TouchableOpacity>
                </View>

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                    />

                <TouchableOpacity style={registerStyles.buttonTouch}>
                    <Text style={registerStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'center', paddingVertical: 0 }}>
                <Text style={registerStyles.text3}>Already registered?</Text>
                <TouchableOpacity
                onPress={onLoginPressed}
                >
                <Text style={registerStyles.innerText}>Login</Text>
                </TouchableOpacity>
                </View>
                
                
            </View>
            </SafeAreaView>
            </ScrollView>
    );
}