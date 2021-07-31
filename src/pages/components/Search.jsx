import React from 'react';

import '../../styles/Search.css'

const Search = ({search, handleSearch, searchInput}) => {
  return (
    <div className="Search">
      <input className="btn" type="text" value={search} onChange={handleSearch} ref={searchInput} placeholder="Search.." />
    </div>
  );
}

export default Search;
