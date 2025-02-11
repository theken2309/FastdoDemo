import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import _routerModules from './Tab/Modules/_routerModules';
import _routerNotify from './Tab/Notifys/_routerNotify';
import _routerProfile from './Tab/MyProfile/_routerProfile';
const Tab = createBottomTabNavigator();
import React from 'react'
export default function LayoutHome({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Modules") iconName = "home";
          else if (route.name === "Notifys") iconName = "bell";
          else if (route.name === "MyProfiles") iconName = "user-circle";
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }} name="Modules" component={_routerModules} />
      <Tab.Screen
        options={{ headerShown: false }} name="Notifys" component={_routerNotify} />
      <Tab.Screen
        options={{ headerShown: false }} name="MyProfiles" component={_routerProfile} />
    </Tab.Navigator>
  );
}


