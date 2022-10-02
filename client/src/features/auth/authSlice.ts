import { createSlice, AsyncThunk, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
    email: string,
    password: string
}

type Initials = {
    user: User,
    loading: boolean,
    error: string,

}

const initialState: Initials = {
    user: { email: '', password: '' },
    loading: false,
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            // state.user = null
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true,
                // state.user = null,
                state.error = ''
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User>) => {
            state.loading = false,
                // state.user = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
                state.error = action.error.message || 'Something went wrong'
            // state.user = null
        })
    }
})


export const fetchUsers = createAsyncThunk('auth/fetchUsers', async () => {
    const response = await axios.get('')
    return response.data
})

// export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentTokken = (state: any) => state.auth.token