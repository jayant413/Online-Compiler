import { configureStore } from "@reduxjs/toolkit";
import language from "./slices/language";
import auth from "./slices/auth";
import submit from "./slices/submit";



export const store = configureStore({
    reducer: {
        language: language,
        auth: auth,
        submit: submit
    },
});
