import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        video: {
            popularVideos: [],
            nextPageToken: null,
            error: false,
        },
        videoCategories:[],
        videoCategoryId: null,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        addVideos: (state, action) => {
            state.video.popularVideos = [...state.video.popularVideos, ...action.payload.videos];
            state.video.nextPageToken = action.payload.nextPageToken;
            state.video.error = action.payload.error;
        },
        addCategories:(state, action)=>{
            state.videoCategories = action.payload;
        },
        addvideoCategoryId:(state, action)=>{
            state.videoCategoryId = action.payload;
        },
        addLoader:(state, action)=>{
            state.loader = action.payload;
        },
        removeVideos: (state) => {
            state.video.popularVideos = [];
            state.video.nextPageToken = null;
            state.video.error = false;
            state.video.loader = false;
        },
    }
});

export const { toggleMenu, addVideos, removeVideos, addCategories, addvideoCategoryId, addLoader } = appSlice.actions;
export default appSlice.reducer;