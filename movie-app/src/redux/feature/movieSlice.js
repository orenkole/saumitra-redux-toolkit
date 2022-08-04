import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieList: [],
    movie: {}
  },
  reducers: {
    getMovies(name) {
      return name
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload
    }
  }
})

export const {
  getMovies,
  setMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
