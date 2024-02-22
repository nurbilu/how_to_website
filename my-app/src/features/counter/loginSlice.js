import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login ,logout } from './loginAPI';

const initialState = {
    status: 'idle',
    logged:false
};
// async
export const loginAsync = createAsyncThunk(
    'login/login',
    async (userData) => {
        const response = await login(userData);
        return response.data;
    }
);
export const logoutAsync = createAsyncThunk(
    'login/logout',
    async (userData) => {
        const response = await logout(userData);
        return response.data;
    }
);


// sync
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload);
                state.logged =true
                console.log(state.logged);
                // state.logins = action.payload
                // state.value += action.payload;
            });
    },
});

export const selectlogins = (state) => state.login.prods;
export const selectlogged = (state) => state.login.logged;
export default loginSlice.reducer;