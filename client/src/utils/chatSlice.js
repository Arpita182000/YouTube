import { createSlice } from "@reduxjs/toolkit";


const chatSlice =  createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessages: (state, action) => {
            state.message.push(action.payload);
        
            // Keep only the latest 20 messages
            if (state.message.length > 50) {
                state.message.splice(0, state.message.length - 50);
            }
        },
        
    }
})

export const {addMessages}=chatSlice.actions;
export default chatSlice.reducer;