import {PostLoginAsync} from ".././api/authAPI";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {setClientAndAuthHeaders} from '.././api/clientAPI';
export const Login = async (signInForm) => {
  try {
    const res = await PostLoginAsync(signInForm);
		await AsyncStorage.setItem('authToken', res.tokens.accessToken); 
		await AsyncStorage.setItem('userId', res.user.id); 
		setClientAndAuthHeaders(res.tokens.accessToken, res.user.id);
    return res;
  } catch (error) {
    console.error(error);
  }
};
