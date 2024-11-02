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
    // Add alert or message to indicate search functionality is under development
    alert('Search functionality is currently under development.');
  };

  return (
    <div className="SearchPage">
      <h1>Search Preprints</h1>
      <p>Utilize our powerful search engine to quickly find relevant preprints based on keywords, authors, institutions, and publication dates.</p>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Search Results</h2>
        <p>Your search results will be displayed here. This section will dynamically update based on your search criteria.</p>
      </div>
      <div>
        <h2>Pagination</h2>
        <p>Use pagination to navigate through large result sets efficiently.</p>
      </div>
    </div>
  );
};

export default SearchPage;
