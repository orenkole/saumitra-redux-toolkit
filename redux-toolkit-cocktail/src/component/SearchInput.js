import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {fetchSearchCocktail} from "../redux/features/cocktailSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const searchValue = useRef();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({searchText}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text" />
          <input type="text" name="name" id="name" ref={searchValue} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
