import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState:{
        isMenuOpen: true,
        popularVideos: null,
    },
    reducers:{
        toggleMenu:(state, action)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        addPopularVideos:(state, action)=>{
            state.popularVideos = action.payload;
        }
    }
});

export const { toggleMenu, addPopularVideos } = appSlice.actions;
export default appSlice.reducer;