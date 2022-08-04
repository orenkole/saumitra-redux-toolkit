import React, {useEffect, useState} from 'react';
import useStyles from '../styles'
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getMovies} from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState('spider')
  const classes = useStyles();

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
      </form>
    </>
  );
};

export default Search;
