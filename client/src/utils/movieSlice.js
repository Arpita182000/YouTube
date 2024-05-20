import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        movieList:null
    },
    reducers:{
        addMovieList:(state,action)=>{
            state.movieList=action.payload
        }
    }
})

export const {addMovieList} = movieSlice.actions;
export default movieSlice.reducer;