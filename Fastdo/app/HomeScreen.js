import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default DetailScreen;