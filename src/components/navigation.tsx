import React  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/loginScreen/loginScreen";
import Register from "../screens/registerScreen/registerScreen";
import Start from "../screens/startScreen/startScreen";

const Stack = createNativeStackNavigator();

export default function Navigation () {



    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                name="Start Screen"
                component={Start}
                options={{headerShown: false}}
                />

                <Stack.Screen
                name="Login Screen"
                component={Login}
                options={{headerShown: false}}
                />

                <Stack.Screen
                name="Register Screen"
                component={Register}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}