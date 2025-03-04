import { GetAllCompanyActiveAsync } from "../../api/companyAPI";


export const GetAllCompanyActive = async () => {
		try {
				const res = await GetAllCompanyActiveAsync();
				return res; 
		} catch (error) {
				console.error("Error in HomeService ", error);
				throw error;
		}
};