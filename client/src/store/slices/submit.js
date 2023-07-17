import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    submit: "wait"
}

export const submit = createSlice({

    name: 'submit',
    initialState,
    reducers: {
        setSubmit: (state, action) => {
            state.submit = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSubmit } = submit.actions

export default submit.reducer