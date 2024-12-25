import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async () => {
    return fetch("https://redux-cms.iran.liara.run/api/users")
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removeUser = createAsyncThunk(
    "users/rmoveUser",
    async (id) => {
      return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`,{
        method:"DELETE"
      })
        .then((res) => res.json())
        .then((data) => data);
    }
  );
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
      return action.payload;
    }),
    builder.addCase(removeUser.fulfilled,(state,action)=>{
        const newUsers=state.filter(user=>user._id!=action.payload.id)
        return newUsers
    })
  },
});

export default slice.reducer;
