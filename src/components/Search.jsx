import React from 'react';

function Search({ changeSearch, searchValue }) {
  return (
    <div>
      <div className='search-box d-flex align-items-center flex-wrap justify-content-between '>
        <h1>{searchValue ? `Search by request: "${searchValue}"` : 'All products'}</h1>
        <form className='d-flex justify-content-between  col-12 col-lg-auto mb-3 mb-lg-0 '>
          <input
            onChange={changeSearch}
            value={searchValue}
            type='search'
            className='form-control '
            placeholder='Search...'
            aria-label='Search'
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
