import { createSlice } from "@reduxjs/toolkit";


const typedSlice = createSlice({
    name:"type",
    initialState:{
        inputValue:""
    },
    reducers:{
        setInputValue:(state,action)=>{
            state.inputValue=action.payload;
        }
    }
})


export const {setInputValue}=typedSlice.actions;
export default typedSlice.reducer;