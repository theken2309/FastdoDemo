import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useDispatch } from 'react-redux'; // Import useDispatch


const MyProfileScreen = ({ navigation }) => {
    const logout = async () => {
        await AsyncStorage.removeItem('authToken');
        // dispatch(logout());
        navigation.navigate("Login")
    };

    return (
        <View className="flex flex-1">
            <View className="flex h-1/5 bg-slate-300  flex-row justify-start  items-end gap-4" >
                <Image
                    source={{ uri: 'https://storage.googleapis.com/fastdo-storage.appspot.com/avatar/638537992176512338_nguyen-thanh-ken.png' }}
                    className="flex flex-col justify-center h-24 w-24 rounded-full ml-4 items-end bg-red-500 " >
                </Image>

                <View>
                    <Text className="text-2xl">Thế Ken</Text>
                    <Text className="text-gray-500">Đép mô bai</Text>
                </View>

            </View>
            <View className="flex flex-row mx-10 items-center justify-between m-4 " >
                <View className="items-center gap-4 " >
                    <Icon name="star" size={16} color="blue" />
                    <Text className="">170</Text>
                </View>
                <View className="items-center  gap-4  " >
                    <Icon name="signal" size={16} color="green" />
                    <Text className="">0</Text>
                </View>
                <View className="items-center  gap-4  " >
                    <Icon name="file" size={16} color="yellow" />
                    <Text className="">25</Text>
                </View>
                <View className="items-center  gap-4  " >
                    <Icon name="file" size={16} color="red" />
                    <Text className="">1</Text>
                </View>
            </View>
            <View className="flex flex-autoflex-col gap-4 p-4" >
                <View className="flex flex-col gap-4" >
                    <Text className="text-xl " >Hướng dẫn sử dụng</Text>

                    <TouchableOpacity>
                        <View className="flex-row gap-4 bg-slate-300 rounded-xl p-6 " >
                            <View className="flex flex-row gap-4 items-center  " >
                                <Icon name="book" size={16} color="blue" />
                                <Text  >Trung tâm hướng dẫn sử dụng</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View className="flex flex-col gap-4" >
                    <Text className="text-xl " >Tài khoản và bảo mật</Text>

                    <View className="flex-col gap-4 bg-slate-300 rounded-xl p-6 " >

                        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} >
                            <View className="flex flex-row gap-4 items-center  " >
                                <Icon name="user-circle" size={16} color="blue" />
                                <Text  >Chỉnh sửa thông tin</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className="flex flex-row gap-4 items-center  " >
                                <Icon name="exchange" size={16} color="blue" />
                                <Text  >Xoá bộ nhớ đệm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-col gap-4" >
                    <Text className="text-xl " >Thông tin ứng dụng</Text>
                    <TouchableOpacity>
                        <View className="flex-row gap-4 bg-slate-300 rounded-xl p-6 " >
                            <View className="flex flex-row gap-4 items-center  " >
                                <Icon name="info-circle" size={16} color="blue" />
                                <Text  >Thông tin phiên bản</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

            <TouchableOpacity className="bg-red-500 m-2 items-center p-2 rounded-lg " onPress={logout} >
                <Text className="text-white"  > Đăng xuất </Text>
            </TouchableOpacity>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

});

export default MyProfileScreen;