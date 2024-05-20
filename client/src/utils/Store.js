import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import typedSlice from "./typedSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        type:typedSlice,
        movie:movieSlice
    }
})

export default store;