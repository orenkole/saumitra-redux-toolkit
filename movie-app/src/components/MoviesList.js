import React from 'react';
import {Card, CardContent, CardMedia, Grid, Link, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const MoviesList = () => {
  const {
    moviesList
  } = useSelector(state => ({...state.movie}))
  return (
    <div>
      <Grid sx={{flexGrow: 1}} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map(item => {
              return <Grid item>
                <Link to={`/movie/${item.imdbID}`} />
                <Card>
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.Poster}
                    alt={item.Title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2" color="text.primary"
                    >
                      {item.Title}
                    </Typography>
                    <Typography
                      variant="body2" color="text.primary"
                    >
                      {item.Year}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesList;
