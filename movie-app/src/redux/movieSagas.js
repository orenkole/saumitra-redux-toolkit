import {takeLatest, put, fork, call} from 'redux-saga/effects'
import {getMovie, getMovies, setMovie, setMovies} from "./feature/movieSlice";
import {fetchMovies} from "./api";

function* onLoadMoviesAsync({payload}) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName)
    if (response.status === 200) {
      yield put(setMovies({...response.data}))
    }
  } catch(error) {
    console.log(error)
  }
}
function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovieAsync({payload}) {
  try {
    const id = payload;
    const response = yield call(fetchMovies, id)
    if (response.status === 200) {
      yield put(setMovie({...response.data}))
    }
  } catch(error) {
    console.log(error)
  }
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const movieSagas = [
  fork(onLoadMovies, onLoadMovie)
]
