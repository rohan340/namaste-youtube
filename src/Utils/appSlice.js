import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        video: {
            popularVideos: [],
            nextPageToken: null
        },
        videoCategories:[],
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        addVideos: (state, action) => {
            state.video.popularVideos = [...state.video.popularVideos, ...action.payload.videos];
            state.video.nextPageToken = action.payload.nextPageToken;
        },
        addCategories:(state, action)=>{
            state.videoCategories = action.payload;
        }
    }
});

export const { toggleMenu, addVideos, addCategories } = appSlice.actions;
export default appSlice.reducer;