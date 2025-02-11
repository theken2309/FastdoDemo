import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodolistDaily from "./TodolistDaily";
import TodolistForList from "./TodolistForList";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodolistRouter({ navigation }) {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "TodolistForList") iconName = "home";
          else if (route.name === "TodolistDaily") iconName = "bell";
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }} name="TodolistForList" component={TodolistForList} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="TodolistDaily" component={TodolistDaily} />

    </Tab.Navigator>
  );
}