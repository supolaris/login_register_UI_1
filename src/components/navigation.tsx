import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/loginScreen/loginScreen";

const Stack = createNativeStackNavigator();

export default function Navigation () {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login Screen"
                component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}