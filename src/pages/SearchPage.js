import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [institutionFilter, setInstitutionFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, authorFilter, institutionFilter, dateFilter);
    alert('Search functionality is currently under development.');
  };

  return (
    <div className="SearchPage">
      <h1>Search Preprints</h1>
      <p>Utilize our search engine to find relevant preprints based on keywords, authors, institutions, and dates.</p>
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
        <p>Results will display here. This section will dynamically update based on your search criteria.</p>
      </div>

      <div>
        <h2>Pagination</h2>
        <p>Use pagination to navigate through large result sets efficiently.</p>
      </div>
    </div>
  );
};

export default SearchPage;
