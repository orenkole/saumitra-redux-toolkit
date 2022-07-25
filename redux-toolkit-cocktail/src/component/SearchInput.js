import React, {useRef} from 'react';

const SearchInput = () => {
  const searchValue = useRef();

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="text" />
          <input type="text" name="name" id="name" ref={searchValue} />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
