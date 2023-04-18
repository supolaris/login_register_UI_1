import React from "react";
import {View, TouchableOpacity, SafeAreaView, Image, Text} from "react-native";
import startLogo from "../../../assets/start.png"
import { startStyles } from "./startStyles";


export default function Start ({ navigation }) {

    const onStartPressed = () => {
        navigation.navigate('Login Screen')
    }

    return(
        <SafeAreaView style={startStyles.container}>
            <View style={{alignItems: 'center'}}>
                <Image 
                style={startStyles.image}
                source={startLogo}
                />
                <Text style={startStyles.text}>GameLife</Text>
            </View>
            <TouchableOpacity
            onPress={onStartPressed}
            style={startStyles.touchButton}
            >
                <Text style={startStyles.touchText}>Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}