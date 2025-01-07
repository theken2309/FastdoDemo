import { Button, Text, View } from "react-native";

export default function TodolistDaily({navigation}){
    return (
        <View>
            <Text>TodolistDaily Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}