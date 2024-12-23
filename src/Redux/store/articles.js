import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArticlesFromServer=createAsyncThunk(
    "courses/getArticlesFromServer",
    async (url)=>{
     
        return fetch(url).then(res=>res.json()).then(data=>data)
    }
)
const slice=createSlice({
    name:'articles',
    initialState:[],
    reducers:{
    },
    extraReducers:builder=>{
        builder.addCase(getArticlesFromServer.fulfilled,(state,action)=>{
            console.log(action);
            state.push(...action.payload)
        })
    }
})

export default slice.reducer