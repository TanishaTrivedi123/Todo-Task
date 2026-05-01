import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userdata: (state, action) => {
           return [action.payload, ...state] 
        }
    }
})

export const {userdata} = userSlice.actions;
export default userSlice.reducer;