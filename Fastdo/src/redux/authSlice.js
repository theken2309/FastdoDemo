import { createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../config/constants';

const initialState = {
    accessToken: null,
    refreshToken: null,
    userId: null,
    isLoggedIn: false,
    userData: null, // Thêm trường để lưu thông tin người dùng
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.accessToken = action.payload.tokens.accessToken;
            state.refreshToken = action.payload.tokens.refreshToken;
            state.userId = action.payload?.user.id || null;
            state.isLoggedIn = true;
        },
				
        logout: () => {
            state.accessToken = null;
            state.refreshToken = null;
            state.userId = null;
            state.isLoggedIn = false;
            state.userData = null; 
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;