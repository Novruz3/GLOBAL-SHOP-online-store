import { configureStore } from "@reduxjs/toolkit";
import cart_slice from "./cart_slice";

const store = configureStore({
    reducer: { cart: cart_slice.reducer }
})

export default store;