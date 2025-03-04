import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import TodolistRouter from './src/screens/Todolist/_routerTodolist';
import CheckinRouter from './src/screens/Checkin/_routerCheckin';
import SelectComapnyScreen from './src/screens/Authentication/SelectCompany';
import LoginScreen from './src/screens/Authentication/Login';
import LayoutHome from './src/screens/Home/_layout';
import { useAuth } from './src/hooks/useAuth';
import './global.css';

const Stack = createNativeStackNavigator();

// Navigator dành cho người dùng chưa đăng nhập
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      options={{ headerShown: false }} 
      name="Login" 
      component={LoginScreen} 
    />
		  <Stack.Screen 
      options={{ headerShown: true ,
			title :"Chọn công ty",
			headerTransparent: false,
			}} 
      name="SelectCompany" 
      component={SelectComapnyScreen} 
    />
  </Stack.Navigator>
);

// Navigator dành cho người dùng đã đăng nhập
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
					options={{ headerShown: true ,
					title :"Chọn công ty",
					headerTransparent: false,
					}} 
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

// RootNavigator sẽ quyết định render AuthNavigator hay AppNavigator dựa trên trạng thái xác thực
const RootNavigator = () => {
	// Lấy trạng thái loading và đăng nhập từ hook useAuth
  const { isLoading, isLoggedIn, companyId } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (isLoggedIn) ? <AppNavigator store={store} /> : <AuthNavigator store={store} />;
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
