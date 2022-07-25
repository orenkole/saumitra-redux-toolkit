## Understand Redux Toolkit API
![img.png](images-notes/rtk-api.png)

# Section 2: Project 1 - Cocktail app with redux toolkit

## Understand createAsyncThunk
`npx create-react-app redux-toolkit-cocktail`  
`npm i react-router-dom react-redux @reduxjs/toolkit`  

## Working on Header

## Configure and Writing 1st action with Redux Toolkit

_redux-toolkit-cocktail/src/redux/features/cocktailSlice.js_
```js
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then(res => res.json())
  }
)

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.cocktails = action.payload.drinks
      state.loading = false;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})

const CocktailReducer = cocktailSlice.reduer;

export {CocktailReducer};
```

_redux-toolkit-cocktail/src/redux/store.js_
```js
import {configureStore} from "@reduxjs/toolkit";
import {CocktailReducer} from "./features/cocktailSlice";

export const store = configureStore ({
  reducer: {
    app: CocktailReducer
  }
})
```

## Search Component
commit  

## Render Cocktails using Redux Toolkit Actions

