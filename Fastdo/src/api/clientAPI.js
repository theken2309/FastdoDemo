import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_ENDPOINT } from '../config/apiEndpoints';

const apiClient = axios.create({
  baseURL: DEFAULT_ENDPOINT,
  headers: { 'Content-Type': 'application/json',
		'x-api-key': '243PA307D3',
	}
});

let cachedHeaders = null; // Lưu cache headers để tối ưu hiệu suất

// Hàm cập nhật headers từ AsyncStorage
export const updateHeadersCache = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken') || '';
    const userId = await AsyncStorage.getItem('userId') || '';
    const companyId = await AsyncStorage.getItem('companyId') || '';

    cachedHeaders = {
      'x-api-key': '243PA307D3',
      'authorization': token,
      'x-client-id': userId,
      'x-company-id': companyId,
    };

		console.log('cachedHeaders:', cachedHeaders);
  } catch (error) {
    console.error('Erro for headers:', error);
  }
};

// Interceptor để tự động thêm headers vào request
apiClient.interceptors.request.use(
  async (config) => {
    if (!cachedHeaders) {
      await updateHeadersCache();
    }

    config.headers = { ...config.headers, ...cachedHeaders };
    return config;
  },
  (error) => Promise.reject(error)
);

// Hàm reset headers cache (khi đăng xuất)
export const clearHeadersCache = () => {
	cachedHeaders = null;
};

// Hàm set company vào cachedHeaders
export const setCompanyToHeaders = (companyId) => {
  if (cachedHeaders) {
    cachedHeaders['x-company-id'] = companyId;
  } else {
    console.error('No cachedHeaders to update');
  }
};

// Hàm set x-client-id và authorization vào cachedHeaders
export const setClientAndAuthHeaders = (token, userId) => {
  if (cachedHeaders) {
    cachedHeaders['authorization'] = token;
    cachedHeaders['x-client-id'] = userId;
  } else {
    console.error('No cachedHeaders to update');
  }
};



// Hàm load headers lại (dùng sau khi đăng nhập)
export const refreshHeaders = async () => {
  await updateHeadersCache();
};

export default apiClient;
