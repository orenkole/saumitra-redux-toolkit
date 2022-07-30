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

_redux-toolkit-cocktail/src/component/CocktailList.js_
```js
import {fetchCocktails} from "../redux/features/cocktailSlice";
//...
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
```
## createAsyncThunk Action to Fetch Single Cocktail
## Working on Single Cocktail

## Searching with createAsyncThunk Action

_redux-toolkit-cocktail/src/redux/features/cocktailSlice.js_
```js
//...

export const fetchSearchCocktail = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({searchText}) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
  }
)
//...

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.cocktails = action.payload.drinks
      state.loading = false;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})
```
_redux-toolkit-cocktail/src/component/SearchInput.js_
```js
  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({searchText}))
  }

<input type="text" name="name" id="name" ref={searchValue} onChange={handleChange} />

```

# Section 3. Project 2 - CRUD with redux toolkit

## Set-up

https://jsonplaceholder.typicode.com/  

`npm i -D antd @reduxjs/toolkit react-router-dom react-redux`  

_crud-api-toolkit/src/index.js_
```js
import "antd/dist/antd.css";
```

## Structuring

## Basic form

## Configuration & Writing GET Action using createAsyncThunk

_postSlice_
```js
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
```

_store.js_
```js
import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice"

export default configureStore({
  reducer: {
    app: PostReducer,
  }
})
```

_index.js_
```js
import {Provider} from "react-redux";
import store from "./redux/store";
<Provider store={store}>
  <App />
</Provider>
```

## Dispatch GET createAsyncThunk Action

_index.js_
```js
const Home = () => {
  const [id, setId] = useState();

  const dispatch = useDispatch();
  const {loading, post} = useSelector((state) => ({...state.app}))

  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please provide post id")
    } else {
      dispatch(getPost({id}))
      setId("");
    }
  }

  <Button type="primary" onClick={fetchUserPost}>Fetch User post</Button>
  {loading ? <LoadingCard count={1} /> : (
    <>
      {post.length > 0 && (
        <div className="site-card-border-less-wrapper">
          <Card type="inner" title={post[0].title}>
            <p>User id: {post[0].id}</p>
            <span>{post[0].body}</span>
          </Card>
        </div>
      )}
    </>
  )}
```

## Adding buttons

## DELETE with createAsyncThunk

_postSlice.js_
```js
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({id}) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
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
    //...
  }
    [deletePost.pending]: (state, action) => {
      state.loading = true
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
```

_index.js_
```js
import {deletePost, getPost} from "../redux/features/postSlice";
//...
    <Button
      onClick={() => dispatch(deletePost({id: post[0].id}))}
    >
```
