import { createSlice } from "@reduxjs/toolkit";
import { langs } from "@uiw/codemirror-extensions-langs";

export const language = createSlice({
    name: "language",
    initialState: {
        name: "Python",
        id: 92,
        snippet: "IyBPbmxpbmUgUHl0aG9uIGNvbXBpbGVyIChpbnRlcnByZXRlcikgdG8gcnVuIFB5dGhvbiBvbmxpbmUuCiMgV3JpdGUgUHl0aG9uIDMgY29kZSBpbiB0aGlzIG9ubGluZSBlZGl0b3IgYW5kIHJ1biBpdC4KcHJpbnQoIkhlbGxvIHdvcmxkIik=",
        file_extension: "py",
    },
    reducers: {
        setLanuage: (state, action) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.snippet = action.payload.snippet;
            state.file_extension = action.payload.file_extension;
        }
    },
});
// Action creators are generated for each case reducer function
export const { setLanuage } = language.actions;

export default language.reducer;
