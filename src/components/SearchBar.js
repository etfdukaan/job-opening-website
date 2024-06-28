import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="form-inline my-4" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control mr-sm-2"
        placeholder="Search jobs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
