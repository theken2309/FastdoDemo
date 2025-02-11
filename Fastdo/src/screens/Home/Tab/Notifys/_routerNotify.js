import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotifysScreen from './Notifys';

const Stack = createNativeStackNavigator();


export default function RouterNotify() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Notify" component={NotifysScreen} />
        </Stack.Navigator>
    )
}

