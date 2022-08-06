import React, {useEffect, useState} from 'react';
import useStyles from '../styles'
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState('spider')
  const classes = useStyles();

  const {movieList: {Error: error}} = useSelector(state => ({...state.movie}))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <>
      <h2 className={classes.title}>Movie search app</h2>
      <form className={classes.form} onSubmit={e => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{m: 1, width: '55ch' }}
          onChange={(e) => { setName(e.target.value)}}
        />
        {error && <p className={classes.error}>{error}</p> }
      </form>
    </>
  );
};

export default Search;

