import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useDispatch } from 'react-redux'; 
import { logout } from '../../../../redux/authSlice';

const MyProfileScreen = ({ navigation }) => {

		const dispatch = useDispatch();

    const logoutAsync = async () => {
        await AsyncStorage.removeItem('authToken');
				await AsyncStorage.removeItem('userId');
				await AsyncStorage.removeItem('companyId');
				dispatch(logout());
				navigation.navigate('Login');
    };

    return (
        <View className="flex flex-1">
            <View className="flex flex-row items-end justify-start gap-4 h-1/5 bg-slate-300" >
                <Image
                    source={{ uri: 'https://storage.googleapis.com/fastdo-storage.appspot.com/avatar/638537992176512338_nguyen-thanh-ken.png' }}
                    className="flex flex-col items-end justify-center w-24 h-24 ml-4 bg-red-500 rounded-full " >
                </Image>

                <View>
                    <Text className="text-2xl">Thế Ken</Text>
                    <Text className="text-gray-500">Đép mô bai</Text>
                </View>

            </View>
            <View className="flex flex-row items-center justify-between m-4 mx-10 " >
                <View className="items-center gap-4 " >
                    <Icon name="star" size={16} color="blue" />
                    <Text className="">170</Text>
                </View>
                <View className="items-center gap-4 " >
                    <Icon name="signal" size={16} color="green" />
                    <Text className="">0</Text>
                </View>
                <View className="items-center gap-4 " >
                    <Icon name="file" size={16} color="yellow" />
                    <Text className="">25</Text>
                </View>
                <View className="items-center gap-4 " >
                    <Icon name="file" size={16} color="red" />
                    <Text className="">1</Text>
                </View>
            </View>
            <View className="flex gap-4 p-4 flex-autoflex-col" >
                <View className="flex flex-col gap-4" >
                    <Text className="text-xl " >Hướng dẫn sử dụng</Text>

                    <TouchableOpacity>
                        <View className="flex-row gap-4 p-6 bg-slate-300 rounded-xl " >
                            <View className="flex flex-row items-center gap-4 " >
                                <Icon name="book" size={16} color="blue" />
                                <Text  >Trung tâm hướng dẫn sử dụng</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View className="flex flex-col gap-4" >
                    <Text className="text-xl " >Tài khoản và bảo mật</Text>

                    <View className="flex-col gap-4 p-6 bg-slate-300 rounded-xl " >

                        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} >
                            <View className="flex flex-row items-center gap-4 " >
                                <Icon name="user-circle" size={16} color="blue" />
                                <Text  >Chỉnh sửa thông tin</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className="flex flex-row items-center gap-4 " >
                                <Icon name="exchange" size={16} color="blue" />
                                <Text  >Xoá bộ nhớ đệm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-col gap-4" >
                    <Text className="text-xl " >Thông tin ứng dụng</Text>
                    <TouchableOpacity>
                        <View className="flex-row gap-4 p-6 bg-slate-300 rounded-xl " >
                            <View className="flex flex-row items-center gap-4 " >
                                <Icon name="info-circle" size={16} color="blue" />
                                <Text  >Thông tin phiên bản</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

            <TouchableOpacity className="items-center p-2 m-2 bg-red-500 rounded-lg " onPress={logoutAsync} >
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