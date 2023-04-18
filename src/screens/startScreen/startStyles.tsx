import React from "react";
import {StyleSheet} from "react-native";

export const startStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    image: {
        height: 400,
        width: 300,
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: 'brown',
        borderBottomWidth: 1
    },
    touchButton: {
        padding: 20,
        backgroundColor: 'brown',
        borderRadius: 20,
        width: '60%'

    },
    touchText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: '700',


    },
})