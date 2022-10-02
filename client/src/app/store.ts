import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import counterSlice from '../features/counter/counterSlice'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import productSlice from "features/product/productSlice";


const middlewares = [thunk, logger]
export const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterSlice,
        products: productSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares),
    devTools: true
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch