import { Button, Text, View } from "react-native";

export default function TodolistForList({navigation}){
    return (
        <View>
            <Text>TodolistForList Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}