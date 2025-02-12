import axios from "axios";
import { DEFAULT_ENDPOINT } from "../../config/constants";
import { Provider, useDispatch, useSelector } from 'react-redux';

export const GetUserById = async (id) => {
    const headers = {
        "x-api-key": "243PA307D3",
        "Content-Type": "application/json",
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI0MTE1MjE3MUQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwianRpIjoiZTJlOGNkYTUtZjc3NC00ZDY3LWIwNGItZWViOGRiODI2ODE5IiwiZXhwIjoyNTM0MDIyNzU2MDAsImlzcyI6Imh0dHA6Ly9hcGkuZmFzdGRvLnZuIiwiYXVkIjoiaHR0cDovL2FwaS5mYXN0ZG8udm4ifQ.bLTyL8BgHP3kwwYmAtxn4LEjmm2zaF7gpNkigD8oZ6Y",
        "x-company-id": "237O695B8A",
        "x-client-id": "241152A564",
    };
    try {
        let uri = `${DEFAULT_ENDPOINT}/api/v2/user/home/${id}`;
        console.log(uri);

        const res = await axios.get(uri, { headers });
        // Kiểm tra xem res.data có thuộc tính metadata không (ví dụ)
        console.log(res);
        if (res.data && res.data.metadata) {
            return res.data.metadata; // Hoặc res.data nếu metadata không tồn tại
        } else {
            // Xử lý trường hợp res.data không có metadata
            console.warn("Response data does not contain 'metadata' property.");
            return res.data; // Hoặc trả về null/undefined nếu không có metadata
        }

    } catch (error) {
        console.error("Error fetching user:", error);
        throw error; // Ném lỗi để component gọi có thể xử lý
    }
};
