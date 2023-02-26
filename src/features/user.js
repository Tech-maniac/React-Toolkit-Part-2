import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {value:{name : "",age : 0, email : ""}}

export const userSlice = createSlice({
    //Name of state
    name : "user",
    initialState : initialStateValue,
    reducers : {
        //state : Holds information about current & previous value of state
        login : (state,action)=>{
            state.value = action.payload
        },
        logout : (state)=>{
            state.value = initialStateValue
        }
    }
})

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;