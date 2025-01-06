import { NavigationContainer } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModulesScreen from './src/screens/Home/Modules';
import NotifysScreen from './src/screens/Home/Notifys';
import MyProfileScreen from './src/screens/Home/MyProfile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Modules") iconName = "home";
            else if (route.name === "Notifys") iconName = "bell";
            else if (route.name === "MyProfile") iconName = "user-circle";
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
        options={{headerShown : false}} name="Modules"  component={ModulesScreen} />
        <Tab.Screen  
         options={{headerShown : false}}
        screenOptions={{headershown: false}}
        name="Notifys"   component={NotifysScreen} />
        <Tab.Screen
         options={{headerShown : false}}
        screenOptions={{headershown: false}}
        name="MyProfile" component={MyProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});