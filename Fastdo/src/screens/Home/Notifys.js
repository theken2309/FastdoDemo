import React from "react";
import { View, Text, Button } from "react-native";

const NotifysScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Hoe" onPress={() => navigation.navigate("Modules")} />
    </View>
  );
};

export default NotifysScreen;
