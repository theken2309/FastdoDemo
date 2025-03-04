import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginSuccess } from '../../redux/authSlice';

/**
 * Kiểm tra trạng thái đăng nhập từ AsyncStorage và cập nhật Redux
 * @param {Function} dispatch - Redux dispatch function
 * @returns {Promise<boolean>} Trả về true nếu đã đăng nhập, false nếu chưa
 */
export const checkAuth = async (dispatch) => {
  try {
    const accessToken = await AsyncStorage.getItem('authToken');
    const userId = await AsyncStorage.getItem('userId');
		const companyId = await AsyncStorage.getItem('companyId');
    if (accessToken && userId && companyId) {
      dispatch(
        loginSuccess({
          tokens: { accessToken },
          user: { id: userId },
					company : {companyId},
					isLoggedIn: true,
        })
      );
      return true;
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra xác thực:', error);
  }
  return false;
};
