import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import ModulesScreen from './Modules';
import ChooseAppScreen from './ChooseApp';
const Stack = createNativeStackNavigator();
export default function RouterModules() {
	
    return (
        <Stack.Navigator>
            <Stack.Screen name="ModulesHome" component={ModulesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseApp" component={ChooseAppScreen} options={{ headerShown: true, title: 'Chi tiết Module' }} />
        </Stack.Navigator>
    )
}