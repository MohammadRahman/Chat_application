import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

type InitialState = {
    loading: boolean,
    products: Product[],
    error: string
}
const initialState: InitialState = {
    loading: true, products: [], error: ''
}
export const fetchProducts = createAsyncThunk('product/fetchProdcuts', async (state) => {
    const response = await axios.get('http://localhost:3001/api/1.0.0/get/products')
    return response.data
})
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        }),
            builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false,
                    state.products = action.payload
            }),
            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong'
            })
    }
})

export default productSlice.reducer