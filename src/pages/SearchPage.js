import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [institutionFilter, setInstitutionFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const handleSearch = () => {
    // Perform search with searchTerm and filters
    console.log('Searching for:', searchTerm, authorFilter, institutionFilter, dateFilter);
  };

  return (
    <div className="SearchPage">
      <h1>Search Preprints</h1>
      <p>Preprints are scholarly articles made publicly available before peer review.  Search our database to find relevant preprints.</p>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Filters</h2>
        <input
          type="text"
          placeholder="Author"
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Institution"
          value={institutionFilter}
          onChange={(e) => setInstitutionFilter(e.target.value)}
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>
      <div>
        {/* Placeholder for search results */}
        <h2>Search Results</h2>
        <p>Results will appear here.</p>
      </div>
    </div>
  );
};

export default SearchPage;
