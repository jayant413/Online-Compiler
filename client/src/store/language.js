import { createSlice } from "@reduxjs/toolkit";

export const language = createSlice({
    name: "language",
    initialState: {
        name: "Python",
        id: 92,
        snippet: "IyBPbmxpbmUgUHl0aG9uIGNvbXBpbGVyIChpbnRlcnByZXRlcikgdG8gcnVuIFB5dGhvbiBvbmxpbmUuCiMgV3JpdGUgUHl0aG9uIDMgY29kZSBpbiB0aGlzIG9ubGluZSBlZGl0b3IgYW5kIHJ1biBpdC4KcHJpbnQoIkhlbGxvIHdvcmxkIik=",
        extension: "py"
    },
    reducers: {
        setLanuage: (state, action) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.snippet = action.payload.snippet;
            state.extension = action.payload.extension
        }
    },
});
// Action creators are generated for each case reducer function
export const { setLanuage } = language.actions;

export default language.reducer;
