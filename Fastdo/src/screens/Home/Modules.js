import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Svg, {
    Use,
    Image,
  } from 'react-native-svg';
const ModulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Modules</Text>
      </View>
      <View style={styles.newsfeed}>
        <Text>Modules</Text>
      </View>
      <View style={styles.modules}>
        <Text>Modules</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: 'yellow',
},

header: {
    flex:2,
    flexDirection:'row',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
},
newsfeed :{
    flex: 3,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
},
modules:{
    flex: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
}

});

export default ModulesScreen;
