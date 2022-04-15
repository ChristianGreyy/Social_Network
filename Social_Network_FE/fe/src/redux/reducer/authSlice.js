import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('login', async () => {
    try {
        const res = await axios.post('http://localhost:8080/api/auth/login');

        console.log(res)
    } catch (err) {
        console.log(err)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: '',
    reducers: {

    },
    extraReducers: {
        [login.pending]: (state, action) => {
            console.log('Đang xử lý');
        },
        [login.fulfilled]: (state, action) => {
            console.log('hoàn thành ')
        },
        [login.rejected]: (state, action) => {
            console.log('Đã lỗi');
        }
    }
})

export default authSlice.reducer