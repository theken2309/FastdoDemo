import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import MyProfileScreen from './MyProfile';
import EditProfileScreen from './EditProfile';
const Stack = createNativeStackNavigator();

export default function RouterProfile() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={MyProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: true, title: 'Chỉnh sửa thông tin' }} />
        </Stack.Navigator>
    )
}

