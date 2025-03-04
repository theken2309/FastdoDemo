import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: null,
    refreshToken: null,
    userId: null,
    isLoggedIn: false,
    userData: null, 
		companyId : null,
		userName : "",
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.accessToken = action.payload.tokens.accessToken;
            state.refreshToken = action.payload.tokens.refreshToken;
            state.userId = action.payload?.user.id || null;
						state.companyId = undefined;
						state.isLoggedIn = true;
        },
				
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.userId = null;
            state.isLoggedIn = false;
            state.userData = null; 
						state.companyId = null;
        },

				setCompany: (state,action) => {
					state.companyId = action.payload.companyId;
					state.isLoggedIn = true;
			},
    },
});

export const { loginSuccess, logout,setCompany } = authSlice.actions;
export default authSlice.reducer;