import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
    //Name of state
    name : "theme",
    initialState : {value : initialStateValue},
    reducers : {
        //state : Holds information about current & previous value of state
        changeColor : (state,action)=>{
            state.value = action.payload
        },
    }
})

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;