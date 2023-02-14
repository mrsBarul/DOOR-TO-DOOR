import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice';
import product from './productSlice';
import search from './searchSlice';

export const store = configureStore({
    reducer: {
        cart,
        product,
        search
    }
})