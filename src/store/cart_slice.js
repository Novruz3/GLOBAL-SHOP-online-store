import { createSlice } from "@reduxjs/toolkit";

const cart_slice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addToCart(state, action) {
            alert("Add to cart")
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++
                state.totalQuantity++
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    title: newItem.title,
                    img: newItem.img
                })
                state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
            alert('Remove from cart')
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            if (existingItem.quantity === 1) {
                state.items.pop(existingItem)
                state.totalQuantity--
            } else {
                existingItem.quantity--
                state.totalQuantity--
            }
        }
    }
})

export default cart_slice
export const cart_action = cart_slice.actions