import React, { useState } from "react";
import { View, Text, Button, TouchableHighlight, TouchableOpacity, FlatList } from "react-native";
const NotifysScreen = ({ navigation }) => {
  const [notify, setNotify] = useState();
  return (
    <View className="flex flex-1 flex-col justify-start ">
      <View className="justify-between flex-row m-4 " >
        <Text className="font-semibold text-xl" >Danh sách</Text>
        <TouchableOpacity>
          <Text className="font-semibold tex-xl text-blue-500 " >Đánh dấu đã đọc</Text>
        </TouchableOpacity>
      </View>
      <FlatList className="flex flex-1 bg-slate-400 " />

    </View>
  );
};

export default NotifysScreen;
