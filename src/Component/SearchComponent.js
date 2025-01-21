// SearchComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    // Call the onSearch prop function when the query changes
    if (query.length > 0) {
      onSearch(query);
    }
  }, [query, onSearch]);

  return (
    <form className="search-form">
      <input
        type="search"
        placeholder="search here..."
        value={query}
        onChange={handleChange}
      />
      <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
    </form>
  );
};

export default SearchComponent;
