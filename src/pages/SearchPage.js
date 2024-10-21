import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search with searchTerm
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="SearchPage">
      <h1>Search Preprints</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Search results will appear here.</p>
    </div>
  );
};

export default SearchPage;
