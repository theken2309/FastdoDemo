
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import iconTodolist from '../../../../../assets/image/icon/todolist.png';
import iconCheckin from '../../../../../assets/image/icon/checkin.png';
import '../../../../../global.css'
import { useSelector } from 'react-redux';
import { GetUserById } from '../../../../services/Home/HomeService';
const list = [
  { id: 1, source: 'https://storage.googleapis.com/fastdo-storage.appspot.com/237O695B8A/638718395634090331_thong-bao.png' },
  { id: 2, source: 'https://storage.googleapis.com/fastdo-storage.appspot.com/237O695B8A/638718395634090331_thong-bao.png' },
  { id: 3, source: 'https://storage.googleapis.com/fastdo-storage.appspot.com/237O695B8A/638718395634090331_thong-bao.png' },
  { id: 4, source: 'https://storage.googleapis.com/fastdo-storage.appspot.com/237O695B8A/638718395634090331_thong-bao.png' },
  { id: 5, source: 'https://storage.googleapis.com/fastdo-storage.appspot.com/237O695B8A/638718395634090331_thong-bao.png' },
];

const listModule = [
  { id: 'Todolist', source: iconTodolist, title: 'Todolist' },
  { id: 'Checkin', source: iconCheckin, title: 'Chấm công' },
];


export default function ModulesScreen({ navigation }) {
  const userId = useSelector((state) => state.auth.userId);
  const [user, setUser] = useState();
  const [banner, setBanner] = useState([]);
  const [module, setModule] = useState([]);
  const [myModule, setMyModule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetUserById(userId);
        setUser(userData);
        setBanner([...list]);
        setModule([...listModule]);
      } catch (error) {

      }
    };

    fetchData();
  }, []); // Thêm userId vào dependency array nếu nó có thể thay đổi

  const handleGotoModule = async (module) => {
    navigation.navigate(module);
  }

  const handleGotoChooseApp = () => {
    navigation.navigate('ChooseApp', {
      modules: module,
      myModules: myModule,
      onGoBack: (data) => {
        setMyModule(data);
      }
    });
  }

  return (
    <View className="flex flex-1 " >
      <View className="flex flex-row items-center gap-4 p-4 align-middle bg-yellow-300 h-28" >
        <Image
          source={{ uri: user?.avatar }}
          style={styles.image}
        />
        <View >
          <Text>{user?.fullName}</Text>
          <Text>Chào mừng tới với Fastdo</Text>
        </View>
      </View>

      <View style={styles.newsfeed}>
        <Text style={{ marginBottom: 8 }}>Tin tức</Text>
        <FlatList
          horizontal
          data={banner}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity  >
              <Image
                className="flex h-40 mx-1 w-52"
                source={{ uri: item.source }}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <View className="flex flex-col gap-4 p-4">
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between " >
            <Text>Yêu thích</Text>
            <TouchableOpacity

              onPress={() => {
                handleGotoChooseApp()
              }}

            >
              <Text className='text-blue-500' >Thêm ứng dụng</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row" >
            <FlatList
              horizontal
              data={myModule}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity className="justify-center mx-4 text-center align-middle " onPress={() => handleGotoModule(item.id)} >
                  <View className="flex flex-row justify-center align-middle" >
                    <Image style={styles.iconModules} source={item.source} />
                  </View>
                  <Text >{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <Text> Danh sách ứng dụng </Text>

          <FlatList
            horizontal
            data={module}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity className="justify-center mx-4 text-center align-middle " onPress={() => handleGotoModule(item.id)} >
                <View className="flex flex-row justify-center align-middle" >
                  <Image style={styles.iconModules} source={item.source} />
                </View>
                <Text >{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

    </View>
  );
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