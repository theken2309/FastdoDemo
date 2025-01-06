import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Hoe" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default HomeScreen;
