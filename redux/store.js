import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./slice/blog/blogSlice";

export const store = configureStore({
    reducer: {        
        blog: blogReducer,
    }
})