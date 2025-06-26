// src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LayoutHome from '../screens/Home/_layout';
import CheckinRouter from '../screens/Checkin/_routerCheckin';
import TodolistRouter from '../screens/Todolist/_routerTodolist';
import SelectComapnyScreen from '../screens/Authentication/SelectCompany';
import LoginScreen from '../screens/Authentication/Login';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      options={{ headerShown: false }} 
      name="Home" 
      component={LayoutHome} 
    />
    <Stack.Screen 
      options={{ headerShown: true }} 
      name="Checkin" 
      component={CheckinRouter} 
    />
    <Stack.Screen 
      options={{ headerShown: true }} 
      name="Todolist" 
      component={TodolistRouter} 
    />
    <Stack.Screen 
      options={{ headerShown: true, title: "Chọn công ty", headerTransparent: false }} 
      name="SelectCompany" 
      component={SelectComapnyScreen} 
    />
    <Stack.Screen 
      options={{ headerShown: false }} 
      name="Login" 
      component={LoginScreen} 
    />
  </Stack.Navigator>
);

export default AppNavigator;
