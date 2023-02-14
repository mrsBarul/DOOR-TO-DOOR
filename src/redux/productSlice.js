import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        selectedCategory: 'FOOD',
    },

    reducers: {
        filter: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.product.selectedCategory;
export const { filter } = productSlice.actions;
export default productSlice.reducer;