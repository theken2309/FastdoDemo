import apiClient from "./clientAPI";
import { COMPANY_API } from "../config/apiEndpoints";

export const GetAllCompanyActiveAsync = async () => {
  try {
    const res = await apiClient.get(COMPANY_API.GET_ALL_COMPANY);
    return res.data.metadata;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error; // Nên throw để xử lý lỗi ở nơi gọi hàm
  }
};
