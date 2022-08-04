import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieList: [],
    movie: {}
  }
})

export default movieSlice.reducer;
