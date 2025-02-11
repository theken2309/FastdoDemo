import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


export default function ChooseAppScreen({ route, navigation }) {
    const [myModule, setMyModule] = useState([]);
    const [module, setModule] = useState([]);
    const { myModules, modules } = route.params;
    const onGoBack = route.params.onGoBack;

    useEffect(() => {
        setMyModule(myModules);
        setModule(modules);
    }, []);

    const handleAddModule = (newItem) => {
        if (myModule.find(item => item.id === newItem.id)) return;
        setMyModule(prevMyModule => [...prevMyModule, newItem]);
    }
    const handleRemoveModule = (id) => {
        setMyModule(prevMyModule => prevMyModule.filter(item => item.id !== id));
    }


    // Lấy hàm callback từ route.params

    const sendDataBack = () => {
        if (onGoBack) {
            onGoBack(myModule); // Gọi hàm callback và truyền đối tượng myModule
            navigation.goBack();
        } else {
            console.warn("Callback function 'onGoBack' is not defined.");
        }
    };



    return (
        <View className="flex  flex-col gap-4 p-4  flex-1">
            {/* chọn module */}
            <View className="flex flex-col gap-4 flex-1" >
                {/* sản phẩm đã chọn  */}
                <View className="flex flex-col gap-2">
                    <Text >Sản phẩm đã chọn</Text>
                    <FlatList
                        horizontal
                        data={myModule}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity className="mx-4" onPress={() => handleRemoveModule(item.id)} >
                                <Image style={styles.iconModules} source={item.source} />
                                <Text >{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                {/* danh sách sản phẩm  */}
                <View className="flex flex-col gap-2">
                    <Text >Danh sách sản phẩm</Text>
                    <FlatList
                        horizontal
                        data={module}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity className="mx-4" onPress={() => handleAddModule(item)} >
                                <View className="flex flex-row justify-center align-middle" >
                                    <Image style={styles.iconModules} source={item.source} />
                                </View>
                                <Text >{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            {/* xác nhận  */}
            <TouchableOpacity className="bg-blue-500 items-center p-2 rounded-lg " onPress={sendDataBack}>
                <Text className="text-white"  > Xác nhận </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    newsfeed: {
        padding: 16,
    },
    itemfeed: {
        width: 240,
        height: 180,
    },
    imageFull: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    modules: {
    },
    iconModules: {
        height: 48,
        width: 48,
    }
});