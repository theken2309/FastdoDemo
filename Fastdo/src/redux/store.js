import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import authReducer

export const store = configureStore({
    reducer: {
        auth: authReducer, // Thêm authReducer vào đây.
    },
});