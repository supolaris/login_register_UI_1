import React from "react";
import {View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert} from "react-native";
import loginLogo from "../../../assets/login.png";
import facebook from "../../../assets/Facebook.png";
import google from "../../../assets/Google.png";
import apple from "../../../assets/Apple.png";
import { loginStyles } from "./loginStyles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";


export default function Login () {

    return(
        <SafeAreaView style={loginStyles.container}>
            <View style={{paddingHorizontal: 20}}>
                <View style={loginStyles.imageContainer}>
                    <Image
                    style={loginStyles.image}
                    source={loginLogo}
                    />
                </View>
                <Text style={loginStyles.text}>Login</Text>
                
                <View style={loginStyles.icon_textinput}>
                    <MaterialIcons 
                    style={loginStyles.icon}
                    name="alternate-email" size={25} color="#666"/>
                    <TextInput
                    style={loginStyles.input}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    />
                </View>
                <View style={loginStyles.icon_textinput}>
                    <Feather 
                    style={loginStyles.icon}
                    name="lock" size={25} color="#666"/>
                    <TextInput
                    style={loginStyles.input}
                    placeholder="Enter password"
                    secureTextEntry={true}
                    />
                    <TouchableOpacity 
                    style={loginStyles.forgotTouch}
                    onPress={() => {Alert.alert("Warning" , "Why you forgot your password")}}
                    >
                        <Text style={loginStyles.forgotText}>Forgot ?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={loginStyles.buttonTouch}>
                    <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={loginStyles.text2} >Or login with ...</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                    <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20}}>
                        <Image 
                        style={loginStyles.cLogo}
                        source={facebook}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20}}>
                        <Image 
                        style={loginStyles.cLogo}
                        source={google}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20}}>
                        <Image
                        style={loginStyles.cLogo} 
                        source={apple}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={loginStyles.text3}>New to App? <Text style={loginStyles.innerText}>Rgister</Text></Text>
                
            </View>
            </SafeAreaView>
    );
}