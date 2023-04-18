import React from "react";
import {View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView} from "react-native";
import registerLogo from "../../../assets/register.png";
import facebook from "../../../assets/Facebook.png";
import google from "../../../assets/Google.png";
import apple from "../../../assets/Apple.png";
import { registerStyles } from "./registerStyles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";


export default function Register ({navigation}) {

    const onLoginPressed = () => {
        navigation.navigate('Login Screen')
    }

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
                    <MaterialIcons 
                    style={registerStyles.icon}
                    name="alternate-email" size={25} color="#666"/>
                    <TextInput
                    style={registerStyles.input}
                    placeholder="Enter full name"
                    keyboardType="email-address"
                    />
                </View>
                <View style={registerStyles.icon_textinput}>
                    <Feather 
                    style={registerStyles.icon}
                    name="lock" size={25} color="#666"/>
                    <TextInput
                    style={registerStyles.input}
                    placeholder="Email ID"
                    secureTextEntry={true}
                    />
                </View>

                <View style={registerStyles.icon_textinput}>
                    <MaterialIcons 
                    style={registerStyles.icon}
                    name="alternate-email" size={25} color="#666"/>
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