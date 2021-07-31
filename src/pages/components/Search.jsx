import React from 'react';

const Search = ({search, handleSearch, searchInput}) => {
  return (
    <div>
      <input className="btn btn-primary" type="text" value={search} onChange={handleSearch} ref={searchInput} />
    </div>
  );
}

export default Search;
