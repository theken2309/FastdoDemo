import { View, Text,FlatList,Image,TouchableOpacity,StyleSheet } from 'react-native'
import { SafeAreaView, SafeAreaProvider, AreaProvider } from "react-native-safe-area-context";
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { setCompany } from '../../redux/authSlice'; 
import {GetAllCompanyActive} from '../.././services/Company/CompanyService'
import "../../../global.css";
import {updateHeadersCache,setCompanyToHeaders} from '../.././api/clientAPI';
export default function SelectCompanyScreen({navigation}) {
  const [companys, setCompanys] = useState();
  const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.userId);

	useEffect(() => {
    const fetchData = async () =>{
			try {
				const result = await GetAllCompanyActive();
				if(result.length == 1)
				 await chooseCompany(result[0].id);
				else
					setCompanys(result);
			 } catch (error) {
		 }
		};
		fetchData();
  }, [userId]);

	const chooseCompany = async (item) => {
	 	 await AsyncStorage.setItem('companyId', item); 
		  setCompanyToHeaders(item);
			 dispatch(setCompany(item));
			 navigation.navigate('Home');
	};
	const renderCompany = ({ item }) => {
		return (
			<TouchableOpacity  
			onPress={() => chooseCompany(item?.id)}
			className="flex-row items-center mt-4 space-x-10">
			<Image
				className="w-10 h-10 rounded-full "
				source={{ uri: item?.logo }}
			/>
			<Text className = "flex-wrap text-xl" >{item?.name}</Text>
		</TouchableOpacity>
		
		);
	};


	return (
			<SafeAreaView className="items-center justify-center flex-auto" >
					 <Image	style={styles.logo}
                	source={require("../../../assets/image/logo-fastdo.png")}/>
					<FlatList
					className="flex-auto m-4 items"
					data={companys}
					keyExtractor={(item) => item.id}
					renderItem={renderCompany}
				/>
			</SafeAreaView>
	)

	
}
	const styles = StyleSheet.create({
		centeredView: {
			backgroundColor: "white",
			width: "100%",
			flex: 1,
		},
		container: {
			flex: 1,
			padding: 16,
		},
		logo: {
			justifyContent: "center",
			alignItems: "center",
			marginBottom: 16,
			height: 50,
			width: 200,
			resizeMode: "contain",
		},
		title: {
			display: "flex",
			color: "gray",
			alignItems: "center",
			fontSize: 20,
			fontWeight: "bold",
		},
	
		input: {
			paddingHorizontal: 8,
			height: 40,
			borderColor: "gray",
			borderRadius: 8,
			borderWidth: 1,
		},
		button: {
			marginTop: 8,
			borderRadius: 8,
			height: 50,
			borderBlockColor: "gray",
			backgroundColor: "blue",
		},
		textPress: {
			color: "white",
			fontSize: 16,
			fontWeight: "500",
			textAlign: "center",
			marginTop: 15,
		},
	});
	
