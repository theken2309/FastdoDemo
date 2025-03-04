import apiClient from "./clientAPI";
import { AUTH_API } from "../config/apiEndpoints";

/// Đăng nhập
export const PostLoginAsync = async (signInForm) => {
  try {
    const res = await apiClient.post(AUTH_API.LOGIN, signInForm);
    return res.data.metadata;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error; // Nên throw để xử lý lỗi ở nơi gọi hàm
  }
};

/// Đăng ký
export const PostRegister = async (signUpForm) => {
	try {
		const res = await apiClient.post(AUTH_API.LOGIN, signUpForm);
		return res.data.metadata;
	} catch (error) {
		console.error("Lỗi khi đăng ký:", error);
	}
};

/// Lấy thông tin user theo id
export const GetUserByIdAsync = async (id) => {
	try {
		const res = await apiClient.get(`${AUTH_API.GET_USER_BY_ID}/${id}`);
		return res?.data?.metadata;
	} catch (error) {
		console.error("Lỗi khi lấy thông tin user:", error);
	}
}