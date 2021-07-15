import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default configureStore({
    reducer: {
        product: reducer
    },
    middleware: [...getDefaultMiddleware()]
})