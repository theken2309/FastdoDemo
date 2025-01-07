import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

const ModulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/fastdo-storage.appspot.com/avatar/638537992176512338_nguyen-thanh-ken.png' }}
            style={styles.image}
          />
          <View style ={{flexDirection:'column' , marginLeft:12 }} > 
          <Text>Nguyen Thanh Ken ,</Text>
          <Text>Chào mừng tới với Fastdo</Text>
          </View>
      </View>

      <View style={styles.newsfeed}>
        <Text>Tin tức</Text>
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

      margin: 24,
      flexDirection:'row',
      backgroundColor: 'yellow',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  newsfeed :{
      flex: 3,
      margin: 24,
      flexDirection:'column',
      backgroundColor: 'gray',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
  },
  modules:{
      flex: 8,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
  },
  image: {
    borderRadius: 24,
    width: 48,
    height: 48,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },

  
  });

export default ModulesScreen;