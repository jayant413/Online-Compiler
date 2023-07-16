import { createSlice } from "@reduxjs/toolkit";
import { langs } from "@uiw/codemirror-extensions-langs";
import {
    python,
    python_coloured,
    c,
    c_coloured,
    cpp_coloured,
    cpp,
    java_coloured,
    js_coloured,
    cSharp_coloured,
    ts_coloured,
    go_coloured,
    php_coloured,
    r_coloured,
    rust_coloured,
} from '../../assets/images/languageLogo/index'

export const language = createSlice({
    name: "language",
    initialState: {
        name: "Python",
        id: 92,
        snippet: "IyBPbmxpbmUgUHl0aG9uIGNvbXBpbGVyIChpbnRlcnByZXRlcikgdG8gcnVuIFB5dGhvbiBvbmxpbmUuCiMgV3JpdGUgUHl0aG9uIDMgY29kZSBpbiB0aGlzIG9ubGluZSBlZGl0b3IgYW5kIHJ1biBpdC4KcHJpbnQoIkhlbGxvIHdvcmxkIik=",
        file_extension: "py",
        logo_coloured: python_coloured,
    },
    reducers: {
        setLanuage: (state, action) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.snippet = action.payload.snippet;
            state.file_extension = action.payload.file_extension;
            state.logo_coloured = action.payload.logo_coloured;
        }
    },
});
// Action creators are generated for each case reducer function
export const { setLanuage } = language.actions;

export default language.reducer;
