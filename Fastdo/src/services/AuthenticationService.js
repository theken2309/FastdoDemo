import {PostLoginAsync} from ".././api/authAPI";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const Login = async (signInForm) => {
  try {
    const res = await PostLoginAsync(signInForm);
		await AsyncStorage.setItem('authToken', res.tokens.accessToken); 
		await AsyncStorage.setItem('userId', res.user.id); 
		await AsyncStorage.setItem('companyId',"237O695B8A"); 
    return res;
  } catch (error) {
    console.error(error);
  }
};
