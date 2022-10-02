import { createSlice } from "@reduxjs/toolkit"

interface CartI {
    cartItems: [],
    cartTotalQuantity: number,
    cartTotalAmount: number
}

const initialState: CartI = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            //  // bug: fix add to cart condition here
            // return [...state, ]
            // first
            // state.cartItems.push(action.payload)
            // first approach added a product to cart but you add the same product twice that duplicates, to avoid that use second method!
            // second
            // const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            // if (itemIndex >= 0) {
            // state.cartItems[itemIndex].cartQuantity += 1
            // } else {

            // const tempProduct = { ...action.payload, cartQuantity: 1 }
            // state.cartItems.push(tempProduct)
            // }


        },
        remove(state, action) {
            // state = state.filter(item => item.id !== action.payload)
        }
    }
})
export const { add, remove } = cartSlice.actions
export default cartSlice.reducer