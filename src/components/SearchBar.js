import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for an item or a category" />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;