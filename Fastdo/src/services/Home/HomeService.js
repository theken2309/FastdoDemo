import { GetUserByIdAsync } from "../../api/authAPI";
export const GetUserById = async (id) => {
    try {
				const res = await GetUserByIdAsync(id);
        return res; 

    } catch (error) {
        console.error("Error in HomeService ", error);
        throw error;
    }
};
