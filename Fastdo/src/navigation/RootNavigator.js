// src/navigation/RootNavigator.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth'; // Đảm bảo useAuth được import từ đúng vị trí
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  const { isLoading, isLoggedIn, companyId } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (isLoggedIn) ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
