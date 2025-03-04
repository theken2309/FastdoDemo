import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// Import logo
import appicon_todolist from '../../assets/image/icon/todolist.png';
import appicon_checkin from '../../assets/image/icon/checkin.png';
import appicon_cfr from '../../assets/image/icon/cfr.png';

	

const productData = {
  todolist: { name: "Todolist", logo: appicon_todolist, type : "Todolist" },
  timekeeping: { name: "Chấm công", logo: appicon_checkin , type : "Checkin" },
  cfr: { name: "Ghi nhận", logo: appicon_cfr, type : "Todolist" },
  workflow: { name: "Quy trình", logo: appicon_todolist , type : "Todolist"},
  blogs: { name: "Tin tức", logo: appicon_todolist , type : "Todolist"}
};

const getProductInfo = (key) => productData[key] || { name: "Unknown", logo: null };

const ProductItemComponent = ({ item }) => {
  const { name, logo, type } = getProductInfo(item);
	const navigation = useNavigation();
  return logo ? (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(type)}>
      <View style={styles.content}>
        <Image source={logo} style={styles.image} />
        <Text 
          className="text-center text-secondary20 text-midMedium" 
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  ) : null;
};

// Định nghĩa styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default ProductItemComponent;
