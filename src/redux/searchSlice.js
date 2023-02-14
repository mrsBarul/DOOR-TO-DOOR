import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchWord: ''
    },

    reducers: {
        search: (state, action) => {
            state.searchWord = action.payload;
        }
    }
})
export const getSearchWord = state => state.search.searchWord
export const { search } = searchSlice.actions;
export default searchSlice.reducer;