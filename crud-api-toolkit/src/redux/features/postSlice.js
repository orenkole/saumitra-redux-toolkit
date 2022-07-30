import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getPost = createAsyncThunk(
  "post/getPost",
  async ({id}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json());
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})

export default postSlice.reducer;
