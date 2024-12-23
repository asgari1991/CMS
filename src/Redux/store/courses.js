import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCoursesFromServer=createAsyncThunk(
    "courses/getCoursesFromServer",
    async (url)=>{
     
        return fetch(url).then(res=>res.json()).then(data=>data)
    }
)
const slice=createSlice({
    name:'courses',
    initialState:[],
    reducers:{
    },
    extraReducers:builder=>{
        builder.addCase(getCoursesFromServer.fulfilled,(state,action)=>{
            console.log(action);
            state.push(...action.payload)
        })
    }
})

export default slice.reducer