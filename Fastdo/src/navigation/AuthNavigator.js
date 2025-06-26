// src/navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/Login';
import SelectComapnyScreen from '../screens/Authentication/SelectCompany';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      options={{ headerShown: false }} 
      name="Login" 
      component={LoginScreen} 
    />
    <Stack.Screen 
      options={{ headerShown: true, title: "Chọn công ty", headerTransparent: false }} 
      name="SelectCompany" 
      component={SelectComapnyScreen} 
    />
  </Stack.Navigator>
);

export default AuthNavigator;
