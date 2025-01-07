import { NavigationContainer } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotifysScreen from '../../screens/Home/Notifys';
import MyProfileScreen from '../../screens/Home/MyProfile';
import ModulesScreen from './Modules';
import ChooseApp from './ChooseApp';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// Stack Navigator cho tab Modules
function ModulesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ModulesHome" component={ModulesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChooseApp" component={ChooseApp} options={{ headerShown: true, title: 'Chi tiết Module' }} />
    </Stack.Navigator>
  );
}


export default function HomeRouter({ navigation }) {
  return (

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
        options={{ headerShown: false }} name="Modules" component={ModulesStackNavigator} />
      <Tab.Screen
        options={{ headerShown: false }}
        screenOptions={{ headershown: false }}
        name="Notifys" component={NotifysScreen} />
      <Tab.Screen
        options={{ headerShown: false }}
        screenOptions={{ headershown: false }}
        name="MyProfile" component={MyProfileScreen} />
    </Tab.Navigator>


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