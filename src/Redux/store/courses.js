import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCoursesFromServer=createAsyncThunk(
    "courses/getCoursesFromServer",
    async (url)=>{
     
        return fetch(url).then(res=>res.json()).then(data=>data)
    }
)
export const removeCourse = createAsyncThunk(
    "articles/removeCourse",
    async (id) => {
      return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`,{
        method:"DELETE"
      })
        .then((res) => res.json())
        .then((data) => data);
    }
  );
const slice=createSlice({
    name:'courses',
    initialState:[],
    reducers:{
    },
    extraReducers:builder=>{
        builder.addCase(getCoursesFromServer.fulfilled,(state,action)=>{
            return action.payload
        }),
        builder.addCase(removeCourse.fulfilled,(state,action)=>{
            const newCourses=state.filter(course=>course._id!=action.payload.id)
        return newCourses
        })
    }
})

export default slice.reducer