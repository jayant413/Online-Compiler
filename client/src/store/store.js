import { configureStore } from "@reduxjs/toolkit";
import language from "./slices/language";
import auth from "./slices/auth";



export const store = configureStore({
    reducer: {
        language: language,
        auth: auth
    },
});
