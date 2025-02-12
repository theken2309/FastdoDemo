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
            // Giả sử action.payload.user chứa userId (cần điều chỉnh nếu cấu trúc khác)
            state.userId = action.payload.user.userId || null;
            state.isLoggedIn = true;
            // state.userData = action.payload.user; // Lưu trữ thông tin người dùng
        },
        logout: () => {
            state.accessToken = null;
            state.refreshToken = null;
            state.userId = null;
            state.isLoggedIn = false;
            state.userData = null; // Xóa thông tin người dùng khi đăng xuất
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;