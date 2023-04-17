import React from "react";
import {View, Text, Image} from "react-native";
import loginLogo from "../../../assets/login.png";
import { loginStyles } from "./loginStyles";



export default function Login () {

    return(
        <View style={loginStyles.container}>
            <Image
            style={loginStyles.image}
            source={loginLogo}
            />
            
            <Text>This is login Screen</Text>
        </View>
    );
}